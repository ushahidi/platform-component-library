/* @flow */
import * as React from 'react'
import classnames from 'classnames'
import checkbox from './checkbox.scss';


type Props = {
  className: string,
  label: string,
  id:string,
  children: React.Node
};

const Checkbox = (props: Props): React.Element<*> => {
  const { className, label, children, id } = props;
  const classProps = classnames(
    checkbox.checkbox,
    checkbox[className]
);
  return (
    <div>
        <input type="checkbox" id={id} className={classProps} />
        <label htmlFor={id}>{children}</label>
    </div>
);
}

Checkbox.defaultProps = {
    className: '',
    label:'',
    id:''
};

export default Checkbox;
