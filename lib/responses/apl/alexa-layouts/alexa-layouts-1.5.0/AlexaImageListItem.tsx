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
export interface AlexaImageListItemProps {
  /* Specifies the layout direction for the button. Set this property to either LTR (left-to-right) or RTL (right-to-left). When not set, this property inherits the layoutDirection specified in the parent component. */
  layoutDirection?: "LTR" | "RTL";
  /* A string describing the list item. Voice over reads this string when the user selects the item. */
  accessibilityLabel?: string;
  /* The image and text content direction. */
  contentDirection?: "column" | "row"
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
  /* When true, display a "play" icon in front of the secondaryText. */
  hasPlayIcon?: boolean;
  /* Colors will be switched depending on the specified theme (light/dark). Default to dark theme */
  theme?: string;
  /* Toggle to hide ordinal in list item. Defaults to false. */
  hideOrdinal?: boolean | string;
  /* Title for list item. */
  primaryText?: string;
  /* Hide secondaryText and tertiaryTest */
  imageMetadataPrimacy?: boolean | string;
  /* Secondary text for list item. */
  secondaryText?: string;
  /* Tertiary text for list item. */
  tertiaryText?: string;
  /* Provider text that will be on top of the image container. */
  providerText?: string;
  /* Height of the image bounding box for the image. The image is scaled to fit within this height using the imageScale setting. */
  imageHeight?: number | string;
  /* Toggle to hide the overlay (scrim) between image and content to increase content readability. Defaults to false. */
  imageHideScrim?: boolean | string;
  /* Progress bar’s percentage to be displayed on the image overlay to show the user glanceable status. Percentage value is any number from 1 – 100. */
  imageProgressBarPercentage?: any;
  /* Aspect ratio of the image. Options are square, round, standard_landscape, standard_portrait, poster_landscape, poster_portrait, widescreen. Default to square */
  imageAspectRatio?: string;
  /* Alternate text for the image. Voice over reads this string. */
  imageAltText?: string;
  /* Scale setting for the image. Options are none, fill, best-fit, best-fill, best-fit-down. Default to best-fit */
  imageScale?: string;
  /* Alignment setting for the image. Options are bottom, bottom-left, bottom-right, center, left, right, top, top-left, top-right. Default to center */
  imageAlignment?: string;
  /* Whether to use rounded corners for the image */
  imageRoundedCorner?: boolean | string;
  /* Set a blurred version of the image to appear behind the image to create a visually consistent container size */
  imageBlurredBackground?: boolean | string;
  /* Image to display in list item. */
  imageSource?: string;
  /* URI for the default image on the list item so the image containers are never empty */
  defaultImageSource?: string;
  /* When true, display a drop shadow behind the image. */
  imageShadow?: boolean;
  /* Content to speak with the SpeakItem or SpeakList command. Must be the output of the textToSpeech or ssmlToSpeech transformer. */
  speech?: any;
  /* The command that is triggered when the list item is selected. */
  primaryAction?: any;
  [key: string]: unknown;
}
export const AlexaImageListItem = (
  props: React.PropsWithChildren<AlexaImageListItemProps>
) => {
  return (
    <>
      <APLImports imports={imports} />
      <ListItemComponent
        definition={{
          type: 'AlexaImageListItem',
          ...omit(props, ['children']),
        }}>
        {props.children}
      </ListItemComponent>
    </>
  );
};
