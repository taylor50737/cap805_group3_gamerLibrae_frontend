import { useState } from 'react';

import CustomInput from '../../shared/components/FormElements/CustomInput';
import CustomButton from '../../shared/components/FormElements/CustomButton';
import { CustomUseForm } from '../../shared/hooks/form-hook';
import { VALIDATOR_EMAIL } from '../../shared/util/validators';

import './ForgotPassword.css';

const ForgotPassword = () => {
  const [responseMsg, setResponseMsg] = useState('');
  const path = import.meta.env.VITE_API_PATH + '/api/auth/forgot-password';
  const [formState, inputHandler, setFormData] = CustomUseForm(
    {
      email: {
        value: '',
        isValid: false,
      },
    },
    false,
  );

  const forgotPWSubmitHandler = (event) => {
    event.preventDefault();
    try {
      fetch(`${import.meta.env.VITE_API_PATH}/api/auth/forgot-password`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({
          email: formState.inputs.email.value,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
          setResponseMsg(json.message);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='forgotPW'>
      <h2 className='forgotPW--greeting'>Forgot Password</h2>
      <br />
      <p className='forgotPW--instruction'>
        Have you forgotten your password to log in to GamerLibrae? Just fill in the email address
        you registered with in the form below and we will send you an email to reset your password.
        For details, please follow the instructions in the email.
      </p>
      <form className='forgotPW--form' onSubmit={forgotPWSubmitHandler}>
        <CustomInput
          element='input'
          id='email'
          type='email'
          label='Email'
          placeholder='Enter your email address'
          validators={[VALIDATOR_EMAIL()]}
          sideButton='Back to log in'
          sideButtonLink='/auth'
          errorText='Please enter a valid email address.'
          onInput={inputHandler}
        />
        {responseMsg ===
        'Password reset instructions have been mailed to the email address you provided.' ? (
          <p className='py-3'>{responseMsg}</p>
        ) : (
          <p className='py-3 text-red-600'>{responseMsg}</p>
        )}
        <div className='forgotPW--form--submit'>
          <CustomButton
            type='submit'
            disabled={
              !formState.isValid ||
              responseMsg ===
                'Password reset instructions have been mailed to the email address you provided.'
            }
          >
            SUBMIT
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
