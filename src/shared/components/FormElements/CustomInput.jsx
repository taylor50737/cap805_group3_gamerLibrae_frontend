import React, { useReducer, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { validate } from '../../util/validators';
import './CustomInput.css';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case 'TOUCH': {
      return {
        ...state,
        isTouched: true,
      };
    }
    case 'RESET':
      return {
        value: action.val,
        isTouched: false,
        isValid: action.isValid,
      };
    default:
      return state;
  }
};

const CustomInput = ({ ownClass, ...props }) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || '',
    isTouched: false,
    isValid: props.initialValid || false,
  });

  const { id, onInput, reset } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  useEffect(() => {
    if (reset) {
      dispatch({ type: 'RESET', val: '', isValid: false });
    }
  }, [reset]);

  const changeHandler = (event) => {
    dispatch({
      type: 'CHANGE',
      val: event.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: 'TOUCH',
    });
  };

  const element =
    props.element === 'input' ? (
      <input
        id={props.id}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        name={props.name}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    );

  const ownClassName =
    ownClass != (undefined && '')
      ? `form-control ${
          !inputState.isValid && inputState.isTouched && 'form-control--invalid'
        } ${ownClass}`
      : `form-control ${!inputState.isValid && inputState.isTouched && 'form-control--invalid'}`;

  const sideButton = props.sideButton != '' && props.sideButton != undefined && (
    <NavLink to={props.sideButtonLink}>
      <p className='side--button'>{props.sideButton}</p>
    </NavLink>
  );

  return (
    <div className={ownClassName}>
      <div>
        <label htmlFor={props.id}>{props.label}</label>
        {sideButton}
      </div>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};

export default CustomInput;
