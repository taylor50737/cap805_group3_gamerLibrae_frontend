import { useNavigate } from 'react-router-dom';

import CustomInput from '../../shared/components/FormElements/CustomInput';
import CustomButton from '../../shared/components/FormElements/CustomButton';
import { CustomUseForm } from '../../shared/hooks/form-hook';
import { VALIDATOR_MINLENGTH } from '../../shared/util/validators';

import './ResetPassword.css';

const ResetPassword = () => {
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
    navigate('/');
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
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText='Please enter a valid confirm password, at least 5 characters.'
          onInput={inputHandler}
        />
        <div className='resetPW--form--submit'>
          <CustomButton type='submit' disabled={!formState.isValid}>
            SUBMIT
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
