/* @flow */
import * as React from 'react'
import classnames from 'classnames'
import dropdown from './dropdown.scss';


type Props = {
  className: string,
  options: array
};

const Dropdown = (props: Props): React.Element<*> => {
  const { className, options, ...customProps } = props;
  const classProps = classnames(
    dropdown['custom-select'],
    dropdown[className]
);
  return (
    <div className={classProps} {...customProps}>
          <select>
                {options.map(option => {
                    return <option value={option.value}>{option.name}</option>;
                })
            }
          </select>
    </div>
    );
}

Dropdown.defaultProps = {
    className: '',
    disabled: false,
    options: []
};

export default Dropdown;
