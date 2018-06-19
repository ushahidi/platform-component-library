/* @flow */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Checkbutton from './checkbox';

storiesOf('Checkbutton', module)
  .add('checkbox', () => (
    <Checkbutton checkType='CHECKBOX' id="a">
      Learn more
    </Checkbutton>
))
.add('radiobutton', () => (
  <Checkbutton checkType='RADIO' id="b">
    Learn more
  </Checkbutton>
));
