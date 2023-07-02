import { useState, useContext } from 'react';

import CustomInput from '../../shared/components/FormElements/CustomInput';
import CustomButton from '../../shared/components/FormElements/CustomButton';
import CustomTextButton from '../../shared/components/FormElements/CustomTextButton';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { CustomUseForm } from '../../shared/hooks/form-hook';
import { AuthContext } from '../../shared/context/auth_context';

import './auth.css';

const DUMMY_ADMIN = {
  email: 'admin@test.com',
  password: 'admin123',
};

const Auth = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);

  const [formState, inputHandler, setFormData] = CustomUseForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false,
  );

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          confirmPassword: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid,
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          confirmPassword: {
            value: '',
            isValid: false,
          },
        },
        false,
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  const authSubmitHandler = (event) => {
    event.preventDefault();
    if (
      isLoginMode &&
      formState.inputs.email.value === DUMMY_ADMIN.email &&
      formState.inputs.password.value === DUMMY_ADMIN.password
    ) {
      auth.adminLogin();
    } else {
      auth.login();
    }
  };

  return (
    <div className='auth'>
      <h2 className='auth--greeting'>
        {isLoginMode ? 'Welcome back!' : 'Create an account to get started!'}
      </h2>
      {/* <hr /> */}
      <form className='auth--form' onSubmit={authSubmitHandler}>
        <CustomInput
          element='input'
          id='email'
          type='email'
          label='Email'
          placeholder='Enter your email address'
          validators={[VALIDATOR_EMAIL()]}
          errorText='Please enter a valid email address.'
          onInput={inputHandler}
        />
        <CustomInput
          element='input'
          id='password'
          type='password'
          label='Password'
          placeholder={
            isLoginMode ? 'Enter your password' : 'Enter a password with at least 5 characters'
          }
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText='Please enter a valid password, at least 5 characters.'
          onInput={inputHandler}
        />
        {!isLoginMode && (
          <CustomInput
            element='input'
            id='confirmPassword'
            type='password'
            label='Confirm Password'
            placeholder='Re-enter your password'
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText='Please enter a valid confirm password, at least 5 characters.'
            onInput={inputHandler}
          />
        )}
        <div className='auth--form--submit'>
          <CustomButton type='submit' disabled={!formState.isValid}>
            {isLoginMode ? 'LOGIN' : 'SIGN UP'}
          </CustomButton>
        </div>
        <div className='auth--form--textbutton'>
          <p>{isLoginMode ? "Don't have an account yet?" : 'Have an account?'} </p>
          <CustomTextButton onClick={switchModeHandler}>
            {isLoginMode ? 'Sign Up' : 'Log In'}
          </CustomTextButton>
        </div>
      </form>
    </div>
  );
};

export default Auth;
