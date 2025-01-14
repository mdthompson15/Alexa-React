/*
  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.

  Licensed under the Apache License, Version 2.0 (the "License").
  You may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

import React from 'react';
import uniqBy from 'lodash/uniqBy';
import { SkillResponsePart } from '../../skill-response';
import { Command } from '../alexa/apl-1.6/commands'
import {
  ResponseBuilderCtx,
  APLProvider,
  ImportDefinition,
  MainTemplateDefinition,
  MainTemplateProvider,
  LayoutDefinition,
  ExtensionDefinition,
} from '../common/context';
import { ResponseBuilder } from 'ask-sdk-core';
import { UserAgentManager } from 'ask-sdk-runtime';

const APLVersion = '1.6';

export interface APLDocument {
  type: 'APL';
  settings?: object;
  version: string;
  description?: string;
  background?: string;
  import?: ImportDefinition[];
  theme: string;
  layouts?: LayoutDefinition;
  extensions?: ExtensionDefinition[];
  commands?: object;
  onMount?: Command[];
  handleKeyDown?: object[];
  handleKeyUp?: object[];
  resources?: object[];
  styles?: object;
  graphics?: object;
  export?: object;
  mainTemplate: {
    parameters: string[];
    items: unknown[];
  };
}

export interface APLDirective {
  type: 'Alexa.Presentation.APL.RenderDocument';
  token?: string;
  document: APLDocument;
  datasources?: object;
}

interface APLProps {
  theme?: 'light' | 'dark';
  settings?: object;
  description?: string;
  background?: string;
  dataSources?: object;
  token?: string;
  layouts?: LayoutDefinition;
  import?: ImportDefinition[];
  extensions?: ExtensionDefinition[];
  commands?: object;
  onMount?: Command[];
  handleKeyDown?: object[];
  handleKeyUp?: object[];
  resources?: object[];
  styles?: object;
  export?: object;
  graphics?: object;
  children?: JSX.Element;
}

export class APL extends SkillResponsePart<APLProps> {
  private static packageVersion: string;
  private layouts: LayoutDefinition = {};
  readonly items: unknown[] = [];
  readonly imports: ImportDefinition[] = [];
  readonly mainTemplate: MainTemplateDefinition = {
    parameters: [],
    items: [],
  };
  readonly directive: APLDirective = {
    type: 'Alexa.Presentation.APL.RenderDocument',
    token: this.props.token,
    document: {
      type: 'APL',
      settings: this.props.settings,
      version: APLVersion,
      description: this.props.description,
      background: this.props.background,
      import: this.imports,
      export: this.props.export,
      theme: this.props.theme || 'dark',
      commands: this.props.commands,
      onMount: this.props.onMount,
      handleKeyDown: this.props.handleKeyDown,
      handleKeyUp: this.props.handleKeyUp,
      resources: this.props.resources,
      styles: this.props.styles,
      layouts: this.layouts,
      extensions: this.props.extensions,
      graphics: this.props.graphics,
      mainTemplate: this.mainTemplate,
    },
    datasources: this.props.dataSources,
  };

  protected register(responseBuilder: ResponseBuilder): void {
    this.unifyDocumentFields();
    this.removeEmptyDocumentFields();
    this.registerUserAgent();
    responseBuilder.addDirective(this.directive);
  }

  private unifyDocumentFields() {
    //Unify Imports
    if (this.props.import) {
      this.imports.push(...this.props.import);
    }
    const imports = uniqBy(this.imports, (i) => i.name + i.version);
    this.imports.length = 0;
    this.imports.push(...imports);

    //Unify Layouts
    if (this.props.layouts) {
      this.directive.document.layouts = Object.assign(this.props.layouts, this.layouts);
    }
  }

  private removeEmptyDocumentFields() {
    if (this.directive.document.import && this.directive.document.import.length === 0) {
      delete this.directive.document.import;
    }
    if (this.directive.document.layouts && Object.keys(this.directive.document.layouts).length === 0) {
      delete this.directive.document.layouts;
    }
  }

  private registerUserAgent() {
    if (!APL.packageVersion) {
      try {
        const packageInfo = __dirname.includes('dist')
          ? require('../../../../../package.json')
          : require('../../../../../package.json');
        APL.packageVersion = `${packageInfo.name}/${packageInfo.version}`;

      } catch {
        APL.packageVersion = "alexa-react/1.0.2"
      }
      UserAgentManager.registerComponent(APL.packageVersion);
    }
  }

  render() {
    return (
      <>
        <APLProvider value={{ imports: this.imports, layouts: this.layouts }}>
          <MainTemplateProvider value={{ ...this.mainTemplate }}>
            {this.props.children}
            <ResponseBuilderCtx.Consumer>
              {(responseBuilder) => {
                if (responseBuilder) {
                  this.register(responseBuilder);
                }
                return null;
              }}
            </ResponseBuilderCtx.Consumer>
          </MainTemplateProvider>
        </APLProvider>
      </>
    );
  }
}
