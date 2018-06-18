/* @flow */
import * as React from 'react'
import classnames from 'classnames'
import label from './label.scss';


type Props = {
  className: string,
  children: React.Node,
  labelFor: string
};

const Label = (props: Props): React.Element<*> => {
  const { className, children, labelFor } = props;
  const classProps = classnames(
    label.label,
    label[className]
);
  return (
    <label
        for={labelFor}
        className={classProps}
    >
        {children}
    </label>
);
}

Label.defaultProps = {
    className: '',
    children: '',
    labelFor: '',
};

export default Label;
