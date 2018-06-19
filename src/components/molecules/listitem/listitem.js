/* @flow */
import * as React from 'react'
import classnames from 'classnames'
import listitem from './listitem.scss';


type Props = {
  className: string,
  label: string,
  id:string,
  children: React.Node
};

const ListItem = (props: Props): React.Element<*> => {
  const { className, label, children, id } = props;
  const classProps = classnames(
    listitem['list-item'],
    listitem[className],
);
  return (
    <li className={classProps}>
        {children}
    </li>
);
}

ListItem.defaultProps = {
    className: '',
    label:'',
    id:''
};

export default ListItem;
