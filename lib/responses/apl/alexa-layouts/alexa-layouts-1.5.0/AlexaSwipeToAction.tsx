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
export interface AlexaSwipeToActionProps {
  actionIcon?: string;
  actionIconBackground?: string;
  actionIconForeground?: string;
  actionIconType?: string;
  button1Command?: Command;
  button1Text?: string;
  button2Command?: Command;
  button2Text?: string;
  buttonsSpacingRight?: number | string;
  buttonsSpacingTop?: number | string;
  customLayoutName?: any;
  direction?: "backward" | "forward";
  emptyRatingGraphic?: any;
  entities?: any[];
  fullRatingGraphic?: any;
  halfRatingGraphic?: any;
  hideDivider?: boolean;
  hideOrdinal?: boolean;
  imageAlignment?: "bottom" | "bottom-left" | "bottom-right" | "center" | "left" | "right" | "top" | "top-left" | "top-right"
  imageBlurredBackground?: boolean;
  imageScale?: "none" | "fill" | "best-fit" | "best-fill" | "best-fit-down";
  imageThumbnailShadow?: boolean;
  imageThumbnailSource?: string;
  lang?: string;
  layoutDirection?: "LTR" | "RTL";
  onButtonsHidden?: any;
  onButtonsShown?: any;
  onSwipeDone?: any;
  onSwipeMove?: any;
  primaryAction?: Command;
  primaryText?: string;
  ratingGraphicType?: "AVG" | "image";
  ratingSlotMode?: string;
  ratingText?: string;
  secondaryText?: string;
  secondaryTextPosition?: string;
  singleRatingGraphic?: any;
  singleRatingGraphicWidth?: number | string;
  tertiaryText?: string;
  tertiaryTextPosition?: string;
  theme?: "light" | "dark";
  touchForward?: boolean;
}
export const AlexaSwipeToAction = (
  props: React.PropsWithChildren<AlexaSwipeToActionProps>
) => {
  return (
    <>
      <APLImports imports={imports} />
      <BaseComponent
        definition={{ type: 'AlexaSwipeToAction', ...omit(props, ['children']) }}>
        {props.children}
      </BaseComponent>
    </>
  );
};
