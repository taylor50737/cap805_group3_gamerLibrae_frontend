import { useState } from 'react';

import CustomInput from '../../shared/components/FormElements/CustomInput';
import CustomButton from '../../shared/components/FormElements/CustomButton';
import CustomTextButton from '../../shared/components/FormElements/CustomTextButton';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_CONFIRMPASSWORD,
} from '../../shared/util/validators';
import { CustomUseForm } from '../../shared/hooks/form-hook';

import './auth.css';
import useAuth from '../../shared/hooks/useAuth';

const Auth = () => {
  const [error, setError] = useState(null);
  const { handleLogin, handleRegister } = useAuth();
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
          userName: undefined,
          confirmPassword: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid,
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          userName: {
            value: '',
            isValid: false,
          },
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

  const authSubmitHandler = async (event) => {
    event.preventDefault();
    if (isLoginMode) {
      const errorMsg = await handleLogin({
        email: formState.inputs.email.value,
        password: formState.inputs.password.value,
      });

      if (errorMsg) {
        setError(errorMsg);
      }
    } else {
      handleRegister({
        userName: formState.inputs.userName.value,
        email: formState.inputs.email.value,
        password: formState.inputs.password.value,
      });
      setIsLoginMode(true);
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
        {!isLoginMode && (
          <CustomInput
            element='input'
            id='userName'
            type='text'
            label='Username'
            placeholder='Enter your username'
            validators={[VALIDATOR_MINLENGTH(3)]}
            errorText='Please enter a valid username, at least 3 characters.'
            onInput={inputHandler}
          />
        )}
        <CustomInput
          element='input'
          id='password'
          type='password'
          label='Password'
          sideButton={isLoginMode ? 'Forgot password?' : ''}
          sideButtonLink='forgot-password'
          placeholder={
            isLoginMode ? 'Enter your password' : 'Enter a password with at least 8 characters'
          }
          validators={[VALIDATOR_MINLENGTH(3)]}
          errorText='Please enter a valid password, at least 3 characters.'
          onInput={inputHandler}
        />
        {!isLoginMode && (
          <CustomInput
            element='input'
            id='confirmPassword'
            type='password'
            label='Confirm Password'
            placeholder='Re-enter your password'
            validators={[VALIDATOR_CONFIRMPASSWORD(formState.inputs.password.value)]}
            errorText='Please check whether your password is entered correctly!'
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
        {error && <p className='error--msg'>{error}</p>}
      </form>
    </div>
  );
};

export default Auth;
