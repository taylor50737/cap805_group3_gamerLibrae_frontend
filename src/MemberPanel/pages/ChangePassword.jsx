import { useState } from 'react';

import CustomInput from '../../shared/components/FormElements/CustomInput';
import CustomButton from '../../shared/components/FormElements/CustomButton';
import { CustomUseForm } from '../../shared/hooks/form-hook';
import { VALIDATOR_MINLENGTH, VALIDATOR_CONFIRMPASSWORD } from '../../shared/util/validators';

const ChangePassword = () => {
  const [successSubmission, setSuccessSubmission] = useState('');
  const [formState, inputHandler, setFormData] = CustomUseForm(
    {
      currentPassword: {
        value: '',
        isValid: false,
      },
      newPassword: {
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
  const changePWSubmitHandler = (event) => {
    event.preventDefault();
    setSuccessSubmission('You have successfully changed your password!');
  };

  return (
    <div className='flex flex-col items-center rounded-lg bg-gray-700 p-4 pb-4'>
      <h2 className='text-3xl'>Change Password</h2>
      <form className='flex flex-col items-center' onSubmit={changePWSubmitHandler}>
        <CustomInput
          element='input'
          id='currentPassword'
          type='password'
          label='Current Password'
          placeholder='Enter your current password'
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText='Your current password is incorrect!'
          onInput={inputHandler}
        />
        <CustomInput
          element='input'
          id='newPassword'
          type='password'
          label='New Password'
          placeholder='Enter a new password with at least 5 characters'
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText='Please enter a valid new password, at least 5 characters.'
          onInput={inputHandler}
        />
        <CustomInput
          element='input'
          id='confirmPassword'
          type='password'
          label='Confirm New Password'
          placeholder='Re-enter your password'
          validators={[VALIDATOR_CONFIRMPASSWORD(formState.inputs.newPassword.value)]}
          errorText='Please check whether your password is entered correctly!'
          onInput={inputHandler}
        />
        <p className='py-3'>{successSubmission}</p>
        <div>
          <CustomButton type='submit' disabled={!formState.isValid}>
            SUBMIT
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
