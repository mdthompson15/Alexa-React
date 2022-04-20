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
const imports = [{ name: 'alexa-layouts', version: '1.2.0' }];
export interface AlexaProgressBarProps {
  /* Progress bar type between determinate and indeterminate. Indeterminate is an ambient progress bar with animation. Determinate is a progress bar as content progresses. Default is determinate*/
  progressBarType?: "determinate" | "indeterminate";
  /* Display an animated progress bar to indicate when the content is loading in. Only works with the determinate progress bar type. Default is false. */
  isLoading?: boolean;
  /* Color that indicate progress of a determinate progress bar. Default is #FAFAFA for dark mode and #1E2222 for light mode. */
  progressFillColor?: string;
  /* Value of progress in millisecond of a determinate progress bar. Default is 0. */
  progressValue?: number | string;
  /* Value of buffer in millisecond of a determinate progress bar. Default is 0. */
  bufferValue?: number | string;
  /* Value of total in millisecond of a determinate progress bar. Default is 0. */
  totalValue?: number | string;
  /* Colors will be swiched depend on the specified theme (light/dark). Default to dark theme */
  theme?: "light" | "dark";
  /* A text string used by a screen reader when the user selects accessibility mode. */
  accessibilityLabel?: string;
  /* Array of entity data bind to this layout */
  entities?: any[];
  /* Allow for unknown properties */
  [key: string]: unknown;
}
export const AlexaProgressBar = (
  props: React.PropsWithChildren<AlexaProgressBarProps>
) => {
  return (
    <>
      <APLImports imports={imports} />
      <BaseComponent
        definition={{ type: 'AlexaProgressBar', ...omit(props, ['children']) }}>
        {props.children}
      </BaseComponent>
    </>
  );
};
