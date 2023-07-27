import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import CustomInput from '../../shared/components/FormElements/CustomInput';
import CustomButton from '../../shared/components/FormElements/CustomButton';
import { CustomUseForm } from '../../shared/hooks/form-hook';
import { VALIDATOR_MINLENGTH, VALIDATOR_CONFIRMPASSWORD } from '../../shared/util/validators';

import './ResetPassword.css';

const ResetPassword = () => {
  const { uid, token } = useParams();
  const [responseMsg, setResponseMsg] = useState('');
  const navigate = useNavigate();
  const [formState, inputHandler, setFormData] = CustomUseForm(
    {
      newPassword: {
        value: '',
        isValid: false,
      },
      confirmNewPassword: {
        value: '',
        isValid: false,
      },
    },
    false,
  );
  const resetPWSubmitHandler = (event) => {
    event.preventDefault();
    try {
      fetch(`${import.meta.env.VITE_API_PATH}/api/auth/reset-password/${uid}/${token}`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({
          newPassword: formState.inputs.newPassword.value,
          confirmNewPassword: formState.inputs.confirmNewPassword.value,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
          setResponseMsg(json.message);
          if (json.message === 'Password changed!') {
            setTimeout(() => {
              navigate('/auth');
            }, 3000);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='resetPW'>
      <h2 className='resetPW--greeting'>Reset Password</h2>
      <br />
      <p className='resetPW--instruction'>Please use the form below to reset your password!</p>
      <form className='resetPW--form' onSubmit={resetPWSubmitHandler}>
        <CustomInput
          element='input'
          id='newPassword'
          type='password'
          label='New Password'
          placeholder='Enter a password with at least 5 characters'
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText='Please enter a valid password, at least 5 characters.'
          onInput={inputHandler}
        />
        <CustomInput
          element='input'
          id='confirmNewPassword'
          type='password'
          label='Confirm New Password'
          placeholder='Re-enter your password'
          validators={[VALIDATOR_CONFIRMPASSWORD(formState.inputs.newPassword.value)]}
          errorText='Please check whether your password is entered correctly!'
          onInput={inputHandler}
        />
        {responseMsg === 'Password changed!' ? (
          <p className='py-3'>{responseMsg + ' You will be redirect to login page!'}</p>
        ) : (
          <p className='py-3 text-red-600'>{responseMsg}</p>
        )}
        <div className='resetPW--form--submit'>
          <CustomButton
            type='submit'
            disabled={!formState.isValid || responseMsg === 'Password changed!'}
          >
            SUBMIT
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
