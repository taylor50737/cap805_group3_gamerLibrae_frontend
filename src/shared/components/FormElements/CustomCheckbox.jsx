import React, { useReducer, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { validate } from '../../util/validators';
import './CustomCheckbox.css';

const CustomCheckbox = ({ handleClicked, ownClass, checked, ...props }) => {
  const hasOnChecked = handleClicked != (undefined && '') ? true : false;
  const labelClassName = ownClass != (undefined && '') ? '' : 'customCheckboxLabel';
  const defaultChecked = checked ? true : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);

  return (
    <div>
      <input
        type='checkbox'
        id={props.id}
        onChange={hasOnChecked ? () => handleClicked() : () => setIsChecked((prev) => !prev)}
      />
      <label htmlFor={props.id} className={labelClassName} {...props}>
        {props.label}
      </label>
    </div>
  );
};

export default CustomCheckbox;
