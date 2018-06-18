/*TODO: Consider using the same component for checkboxes and radion-buttons */
/* @flow */
import * as React from 'react'
import classnames from 'classnames'
import radiobutton from './radiobutton.scss';


type Props = {
  className: string,
  label: string,
  id:string,
  children: React.Node
};

const Radiobutton = (props: Props): React.Element<*> => {
  const { className, label, children, id } = props;
  const classProps = classnames(
    radiobutton.checkbox,
    radiobutton[className]
);
  return (
    <div>
        <input type="radio" id={id} className={classProps} />
        <label htmlFor={id}>{children}</label>
    </div>
);
}

Radiobutton.defaultProps = {
    className: '',
    label:'',
    id:''
};

export default Radiobutton;
