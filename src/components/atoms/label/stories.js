/* @flow */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Label from './label';

storiesOf('Label, default', module)
    .add('dropdown, default', () => (
        <Label htmlFor="g"> This is a default label</Label>
));
