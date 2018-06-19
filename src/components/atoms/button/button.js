/* @flow */
import * as React from 'react'
import classnames from 'classnames'
import button from './button.scss';

const ButtonType = {
  BUTTON: 'button',
  BETA: 'button-beta',
  GAMMA: 'button-gamma',
  DESTRUCTIVE: 'button-destructive'
};

type Props = {
  buttonType: string,
  children: React.Node,
  className: string
};

const Button = (props: Props): React.Element<*> => {
  const { buttonType, className, children, ...customProps } = props;

  const classProps = classnames(
    button.button,
    button[ButtonType[buttonType]],
    button[className]
);

  return (
    <button type="button" className={classProps} {...customProps} >
      {children}
    </button>
);
}

Button.defaultProps = {
  type: ButtonType.BUTTON,
  className: '',
};

export default Button;
