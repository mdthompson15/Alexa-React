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
const imports = [{ name: 'alexa-layouts', version: '1.5.0' }];
export interface AlexaSliderProps {
  sliderId: string;
  accessibilityLabel?: string;
  bufferValue?: number | string;
  entities?: any[];
  handleKeyDownCommand?: any[];
  iconLeftGraphicSource?: string;
  iconRightGraphicSource?: string;
  isLoading?: boolean;
  layoutDirection?: "LTR" | "RTL";
  metadataDisplayed?: boolean;
  metadataPosition?: "above_right" | "above_left_right" | "below_left_right";
  onBlurCommand?: Command[];
  onDownCommand?: Command[];
  onFocusCommand?: Command[];
  onMoveCommand?: Command[];
  onUpCommand?: Command[];
  positionPropertyName?: string;
  progressFillColor?: string;
  progressValue?: number | string;
  sliderMoveMillisecond?: number | string;
  sliderSize?: string;
  sliderType?: string;
  theme?: "light" | "dark";
  thumbColor?: string;
  thumbDisplayedAllStates?: boolean;
  totalValue?: number | string;
}
export const AlexaSlider = (
  props: React.PropsWithChildren<AlexaSliderProps>
) => {
  return (
    <>
      <APLImports imports={imports} />
      <BaseComponent
        definition={{ type: 'AlexaSlider', ...omit(props, ['children']) }}>
        {props.children}
      </BaseComponent>
    </>
  );
};
