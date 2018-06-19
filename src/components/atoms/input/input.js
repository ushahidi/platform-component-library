/* @flow */
import * as React from 'react'
import classnames from 'classnames'
import input from './input.scss';

const InputType = {
    TEXT: 'text',
    PASSWORD: 'password',
    EMAIL: 'email',
    SEARCH: 'search'
};

type Props = {
  className: string,
  inputType: string
};

const Input = (props: Props): React.Element<*> => {
  const { className, inputType, ...customProps } = props;
  const classProps = classnames(
    input.input,
    input[className]
);

  return (
    <input
        type={InputType[inputType]}
        className={classProps}
        {...customProps}
    />
    );
}

Input.defaultProps = {
    className: '',
    inputType: 'TEXT'
};

export default Input;
