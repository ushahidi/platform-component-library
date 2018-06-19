/* @flow */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import FormFieldInput from './formfieldInput';

import FormFieldCheckbox from './formfieldCheckbox';

storiesOf('Formfield with input-box', module)
    .add('default', () => (
        <FormFieldInput id="h" label="Pretty input-boxes in forms"></FormFieldInput>
))
.add('default, disabled', () => (
    <FormFieldInput id="i" disabled label="Pretty disabled input-boxes in forms"></FormFieldInput>
))
.add('default with value', () => (
    <FormFieldInput id="j" value="this is a previously added value" label="I am being edited" onChange={()=>{}}></FormFieldInput>
))
.add('default with placeholder', () => (
    <FormFieldInput id="k" placeholder="This is a placeholder!" label="I have a placeholder"></FormFieldInput>
))
.add('error-state', () => (
    // TODO: Fix error-state in styles
    <div>
        <FormFieldInput id="l" label="This form-field has problems" errorText="Ooops something went wrong" showError="true" formFieldType="ERROR"></FormFieldInput>
        <br/> <br/>
    </div>
))
.add('success-state', () => (
    <FormFieldInput id="m" label="I am a successful input-box" formFieldType="SUCCESS"></FormFieldInput>
));

storiesOf('Formfield with check-box', module)
    .add('checkbox', () => (
        <FormFieldCheckbox id="n" legend="Pretty checkboxes in forms" formFieldType="CHECKBOX" options={[{label: 'Checkbox 1', value:'1'}, {label: 'Checkbox 2', value:'2'}]}></FormFieldCheckbox>
))
.add('radiobutton', () => (
    <FormFieldCheckbox id="n" legend="Pretty radiobuttons in forms" formFieldType="RADIO" options={[{label: 'Radiobutton 1', value:'1'}, {label: 'Radiobutton 2', value:'2'}]}></FormFieldCheckbox>
));
