/* @flow */
import * as React from 'react'
import classnames from 'classnames'
import button from './button.scss';

export const ButtonType = {
  BUTTON: 'button',
  BETA: 'button-beta',
  GAMMA: 'button-gamma',
  DESTRUCTIVE: 'button-destructive'
};

type Props = {
  type: string,
  onClick: Function,
  children: React.Node,
  className: string,
  disabled: boolean,
};

const Button = (props: Props): React.Element<*> => {
  const { type, onClick, children, className, disabled } = props;
  const classProps = classnames(
    button.button,
    button[ButtonType[props.type]],
    {
      [button.disabled]: disabled,
    },
    button[className]
);
  return (
    <button type="button" onClick={onClick} disabled={disabled} className={classProps}>
      {children}
    </button>
);
}

Button.defaultProps = {
  type: ButtonType.BUTTON,
  onClick: () => {},
  className: '',
  disabled: false,
};

export default Button;
