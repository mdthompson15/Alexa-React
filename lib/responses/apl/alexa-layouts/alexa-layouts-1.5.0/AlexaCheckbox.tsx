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
import { Command } from '../../alexa/apl-1.6/commands';

type dimension = string | number;

const imports = [{ name: 'alexa-layouts', version: '1.5.0' }];
export interface AlexaCheckboxProps {
  /* Array of entity data to bind to this component. */
  entities?: any[];
  /* Colors will be swiched depend on the specified theme (light/dark). Default to dark theme */
  theme?: "light" | "dark";
  /* A string describing the check box. Voice over reads this string when the user selects the button. */
  accessibilityLabel?: string;
  /* Height of the check box */
  checkboxHeigh?: dimension;
  /* Width of the check box */
  checkboxWidth?: dimension;
  /* The action to trigger when the user selects the check box. */
  primaryAction?: Command;
  /* Fill color to use for the check box when it is selected (when checked is true). */
  selectedColor?: string;
  [key: string]: unknown;
}
export const AlexaCheckbox = (
  props: React.PropsWithChildren<AlexaCheckboxProps>
) => {
  return (
    <>
      <APLImports imports={imports} />
      <BaseComponent
        definition={{ type: 'AlexaCheckbox', ...omit(props, ['children']) }}>
        {props.children}
      </BaseComponent>
    </>
  );
};
