import React, { useState, useReducer, useEffect } from 'react';

import './CustomDropdownList.css';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
      };
    case 'RESET':
      return {
        value: action.val,
      };
    default:
      return state;
  }
};

const CustomDropdownList = ({ ownClass, ...props }) => {
  const optionList = props.optionList;

  /** default to first index and listen to index of value change */
  // const [optionSelected, setOptionSelected] = useState(0);

  // const handleOptionSelectChange = (event) => {
  //   preventDefault();
  //   setOptionSelected(event.target.value);
  // };

  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || '',
  });

  const { id, onInput, reset } = props;
  const { value } = inputState;

  useEffect(() => {
    onInput(id, value);
  }, [id, value, onInput]);

  useEffect(() => {
    if (reset) {
      dispatch({ type: 'RESET', val: 0 });
    }
  }, [reset]);

  const changeHandler = (event) => {
    dispatch({
      type: 'CHANGE',
      val: event.target.value,
    });
  };

  const ownClassName =
    ownClass != (undefined && '') ? `form-control-dropdown ${ownClass}` : `form-control-dropdown`;

  return (
    <div className={ownClassName}>
      <label htmlFor={props.label}>{props.label}</label>
      <select id={props.label} name={props.name} value={inputState.value} onChange={changeHandler}>
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
