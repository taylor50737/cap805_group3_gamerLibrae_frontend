import React, { useState } from 'react';

import './CustomDropdownList.css';

const CustomDropdownList = (props) => {
  const optionList = props.optionList;

  /** default to first index and listen to index of value change */
  const [optionSelected, setOptionSelected] = useState(0);

  const handleOptionSelectChange = (event) => {
    preventDefault();
    setOptionSelected(event.target.value);
  };

  return (
    <div className='form-control-dropdown'>
      <label htmlFor={props.label}>{props.label}</label>
      <select
        id={props.label}
        name={props.name}
        value={props.value}
        onChange={() => props.handleSelect(event)}
      >
        {/* making use of index from map */}
        {optionList.map((option, index) => (
          // updating option value to have index rather than title
          <option key={`${index}-${option.value}`} value={index}>
            {option.title}
          </option>
        ))}
      </select>
      {/* <p>You have selected {data[dataIndex].value}!</p> */}
    </div>
  );
};

export default CustomDropdownList;
