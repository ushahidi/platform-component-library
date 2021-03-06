/* @flow */
import * as React from 'react'
import classnames from 'classnames'
import formfield from './formfield.scss';
import Label from '../../atoms/label/label';
import Input from '../../atoms/input/input';

const FormFieldType={
    ERROR: 'error',
    SUCCESS: 'success'
};

type Props = {
  className: string,
  showError: boolean,
  label: string,
  id: string,
  errorText: string
};

const FormFieldInput = (props: Props): React.Element<*> => {
  const {className, formFieldType, showError, label, id, errorText, ...customProps } = props;
  const classProps = classnames(
    formfield['form-field'],
    formfield[className],
    formfield[FormFieldType[formFieldType]]
);

return (
      <div className={classProps}>
        <Label htmlFor={id}>{label}</Label>
        <Input id={id} {...customProps} />
        { showError ?
            <span className={formfield['error']}>
                {errorText}
            </span>
            : ''
        }
      </div>
  );
}

FormFieldInput.defaultProps = {
    className: '',
    formFieldType:'',
    showError: false,
    label: '',
    id: '',
    errorText: ''
};

export default FormFieldInput;
