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
import { Text } from '../alexa/apl-1.6/components';
import { BaseComponent } from '../common';
import { APLImports, AplLayout } from '../root';

const imports = [{ name: 'alexa-layouts', version: '1.5.0' }, { name: "alexa-styles", version: "1.1.0"}];
export interface FormattedDurationProps {
  seconds: string;
  [key: string]: unknown;
}
export const FormattedDuration = (
  props: React.PropsWithChildren<FormattedDurationProps>
) => {
  return (
    <>
      <APLImports imports={imports} />
      <AplLayout name="FormattedDuration" seconds={0} format={"${seconds >= 3600 ? 'HH:mm:ss' : 'mm:ss'}"}>
        <Text fontSize={"${@fontSizeXSmall}"} text="${Time.format(format, seconds)}"/>
      </AplLayout>
      <BaseComponent
        definition={{ type: 'FormattedDuration', ...omit(props, ['children']) }}>
        {props.children}
      </BaseComponent>
    </>
  );
};
