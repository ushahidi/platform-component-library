/* @flow */
import * as React from 'react'
import classnames from 'classnames'
import checkbox from './checkbox.scss';

const CheckType = {
    CHECKBOX: 'checkbox',
    RADIO: 'radio'
}

type Props = {
  className: string,
  id: string,
  children: React.Node
};

const Checkbox = (props: Props): React.Element<*> => {
  const { checkType, className, children, id, ...customProps} = props;
  const classProps = classnames(
    checkbox.checkbox,
    checkbox[className]
);
return (
    <div>
        <input type={CheckType[checkType]}  id={id} className={classProps}  {...customProps}/>
        <label for={id}>{children}</label>
    </div>
);
}

Checkbox.defaultProps = {
    className: '',
    id:''
};

export default Checkbox;
