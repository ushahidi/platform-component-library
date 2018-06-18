/* @flow */
import * as React from 'react'
import classnames from 'classnames'
import input from './input.scss';

type Props = {
  className: string,
  disabled: boolean,
  placeholder: string,
  id: string
};

const Input = (props: Props): React.Element<*> => {
  const { className, disabled, placeholder, id } = props;
  const classProps = classnames(
    input.input,
    {
      [input.disabled]: disabled,
    },
    input[className]
);
  return (
    <input
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        className={classProps}
    />
    );
}

Input.defaultProps = {
    className: '',
    disabled: false,
    placeholder: '',
    id:''
};

export default Input;
