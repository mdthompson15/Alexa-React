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
import { ListItemComponent } from '../../common';
const imports = [{ name: 'alexa-layouts', version: '1.5.0' }];
export interface AlexaTextListItemProps {
  /* Determines whether to display a single graphical asset for the rating, or build the rating from multiple image assets. When set to single, provide a single graphical asset in the singleRatingGraphic property. When multiple, provide the numeric rating in ratingNumber. */
  ratingSlotMode?: "single" | "multiple"
  /* The graphic to display to represent the rating. Used when ratingSlotMode is single. You can provide either a reference to an AVG or the URL of an image. */
  singleRatingGraphic?: any;
  /* The width of the bounding box for the single graphic that represents the rating */
  singleRatingGraphicWidth?: number | string;
  /* The numeric rating between 0 and 5. Used when ratingSlotMode is multiple. */
  ratingNumber?: number | string;
  /* The graphic to display to represent an 'empty' rating slot (such as an empty star). Used when ratingSlotMode is multiple. You can provide either a reference to an AVG or the URL of an image. */
  emptyRatingGraphic?: any;
  /* The graphic to display to represent a 'full' rating slot (such as a full star). Used when ratingSlotMode is multiple. You can provide either a reference to an AVG or the URL of an image. */
  fullRatingGraphic?: any;
  /* The graphic to display to represent a 'half' rating slot (such as a half star). Used when ratingSlotMode is multiple. You can provide either a reference to an AVG or the URL of an image. */
  halfRatingGraphic?: any;
  /* The type of graphic to use for the rating */
  ratingGraphicType?: "AVG" | "image"
  /* Text to display next to the rating. */
  ratingText?: string;
  /* Array of entity data to bind to this component. */
  entities?: any[]  
  /* Colors will be switched depending on the specified theme (light/dark). Default to dark theme */
  theme?: string;
  /* When true, hide the default left and right padding. */
  hideHorizontalMargin?: boolean;
  /* Toggle to hide ordinal in list item. Defaults to false. */
  hideOrdinal?: boolean | string;
  /* Toggle to hide the divider that appears at the bottom of each item to help separate it from the content below. Default to false */
  hideDivider?: boolean | string;
  /* Primary text for each list item so that users can understand and select an item. */
  primaryText?: string;
  /* The action that is triggered when the item is selected. */
  primaryAction?: any;
  /* Toggle to switch between touch forward and voice forward. Defaults to false, voice forward */
  touchForward?: boolean | string;
  imageAlignment?: "bottom" | "bottom-left" | "bottom-right" | "center" | "left" | "right" | "top" | "top-left" | "top-right";
  imageBlurredBackground?: boolean;
  imageScale?: string;
  imageThumbnailShadow?: boolean;
  imageThumbnailSource?: string;
  layoutDirection?: "RTL" | "LTR";
  tertiaryText?: string;
  tertiaryTextPosition?: string;
  [key: string]: unknown;
}
export const AlexaTextListItem = (
  props: React.PropsWithChildren<AlexaTextListItemProps>
) => {
  return (
    <>
      <APLImports imports={imports} />
      <ListItemComponent
        definition={{
          type: 'AlexaTextListItem',
          ...omit(props, ['children']),
        }}>
        {props.children}
      </ListItemComponent>
    </>
  );
};
