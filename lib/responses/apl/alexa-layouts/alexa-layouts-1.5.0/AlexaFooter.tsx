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

import omit from 'lodash/omit';
import * as React from 'react';
import { APLImports } from '../../root';
import { BaseComponent } from '../../common';
const imports = [{ name: 'alexa-layouts', version: '1.5.0' }];
export interface AlexaFooterProps {
  /* Hint text to display in Footer. */
  hintText?: string;
  /* Colors will be swiched depend on the specified theme (light/dark). Default to dark theme */
  theme?: "light" | "dark";
  /* Array of entity data to bind to this component. */
  entities?: any[];
  lang?: string;
  /* Specifies the layout direction for the button. Set this property to either LTR (left-to-right) or RTL (right-to-left). When not set, this property inherits the layoutDirection specified in the parent component. */
  layoutDirection?: "LTR" | "RTL";
  [key: string]: unknown;
}
export const AlexaFooter = (
  props: React.PropsWithChildren<AlexaFooterProps>
) => {
  return (
    <>
      <APLImports imports={imports} />
      <BaseComponent
        definition={{ type: 'AlexaFooter', ...omit(props, ['children']) }}>
        {props.children}
      </BaseComponent>
    </>
  );
};
