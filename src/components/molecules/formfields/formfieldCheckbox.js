/* @flow */
import * as React from 'react'
import classnames from 'classnames'
import formfield from './formfield.scss';
import Label from '../../atoms/label/label';
import Checkbox from '../../atoms/checkbox/checkbox';

const FormFieldType={
    RADIO: 'radio',
    CHECKBOX: 'checkbox'
};

type Props = {
  className: string,
  showError: boolean,
  label: string,
  id: string,
  errorText: string
};

const FormFieldCheckbox = (props: Props): React.Element<*> => {
  const {className, formFieldType, showError, legend, options, id, errorText, ...customProps } = props;
  const classProps = classnames(
    formfield['form-field'],
    formfield[className],
    formfield[FormFieldType[formFieldType]]
);

return (

    <fieldset>
        <legend>{legend}</legend>
        <div className={classProps}>
        {options.map((option, index) => {
            return (
                <Checkbox checkType={formFieldType} id={index} value={option.value} >
                    {option.label}
                </Checkbox>
            )
        }
        )}
        </div>
        { showError ?
            <span className={formfield['error']}>
                {errorText}
            </span>
            : ''
        }
</fieldset>
  );
}

FormFieldCheckbox.defaultProps = {
    className: '',
    formFieldType:'',
    showError: false,
    label: '',
    id: '',
    errorText: ''
};

export default FormFieldCheckbox;
