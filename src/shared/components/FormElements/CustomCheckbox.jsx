import React, { useReducer, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { validate } from '../../util/validators';
import './CustomCheckbox.css';

const CustomCheckbox = ({ handleClicked, checked, ...props }) => {
  const hasOnChecked = handleClicked != (undefined && '') ? true : false;
  const defaultChecked = checked ? true : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);

  return (
    <div>
      <input
        type='checkbox'
        id={props.id}
        onChange={hasOnChecked ? () => handleClicked() : () => setIsChecked((prev) => !prev)}
        {...props}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};

export default CustomCheckbox;
