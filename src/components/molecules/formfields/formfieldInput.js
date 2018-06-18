/* @flow */
import * as React from 'react'
import classnames from 'classnames'
import formfield from './formfield.scss';
import Label from '../../atoms/label/label';
import Input from '../../atoms/input/input';

type Props = {
  children: React.Node,
  className: string,
  showError: boolean,
  label: string,
  placeholder: string,
  id: string,
  errorText: string
};

const FormFieldInput = (props: Props): React.Element<*> => {
  const { children, className, showError, label, placeholder, id, errorText } = props;
  const classProps = classnames(
    formfield['form-field'],
    formfield[className],
);

return (
      <div className={classProps}>
        <Label labelFor={id}>{label}</Label>
        <Input id={id} placeholder={placeholder}/>
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
    showError: false,
    label: '',
    placeholder: '',
    id: '',
    errorText: ''
};

export default FormFieldInput;
