import { useState, useContext } from 'react';

import CustomInput from '../../shared/components/FormElements/CustomInput';
import CustomButton from '../../shared/components/FormElements/CustomButton';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { CustomUseForm } from '../../shared/hooks/form-hook';
import { AuthContext } from '../../shared/context/auth_context';

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
    <div>
      <h2>{isLoginMode ? 'LOGIN' : 'SIGNUP'}</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        <CustomInput
          element='input'
          id='email'
          type='email'
          label='E-Mail'
          validators={[VALIDATOR_EMAIL()]}
          errorText='Please enter a valid email address.'
          onInput={inputHandler}
        />
        <CustomInput
          element='input'
          id='password'
          type='password'
          label='Password'
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
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText='Please enter a valid confirm password, at least 5 characters.'
            onInput={inputHandler}
          />
        )}
        <CustomButton type='submit' disabled={!formState.isValid}>
          {isLoginMode ? 'LOGIN' : 'SIGNUP'}
        </CustomButton>
      </form>
      <CustomButton inverse onClick={switchModeHandler}>
        SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
      </CustomButton>
    </div>
  );
};

export default Auth;
