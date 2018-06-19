/* @flow */
import * as React from 'react'
import classnames from 'classnames'
import label from './label.scss';


type Props = {
  className: string,
  children: React.Node,
};

const Label = (props: Props): React.Element<*> => {
  const { className, children, ...customProps } = props;
  const classProps = classnames(
    label.label,
    label[className]
);
  return (
    <label
        className={classProps}
        {...customProps}
    >
        {children}
    </label>
);
}

Label.defaultProps = {
    className: '',
};

export default Label;
