/* @flow */
import * as React from 'react'
import classnames from 'classnames'
import dropdown from './dropdown.scss';


type Props = {
  className: string,
  disabled: boolean,
  options: array
};

const Dropdown = (props: Props): React.Element<*> => {
  const { className, disabled, options } = props;
  const classProps = classnames(
    dropdown['custom-select'],
    {
      [dropdown.disabled]: disabled,
    },
    dropdown[className]
);
  return (
    <div className={classProps}>
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
