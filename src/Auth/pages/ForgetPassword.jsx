import { useNavigate } from 'react-router-dom';

import CustomInput from '../../shared/components/FormElements/CustomInput';
import CustomButton from '../../shared/components/FormElements/CustomButton';
import { CustomUseForm } from '../../shared/hooks/form-hook';
import { VALIDATOR_EMAIL } from '../../shared/util/validators';

import './ForgetPassword.css';

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [formState, inputHandler, setFormData] = CustomUseForm(
    {
      email: {
        value: '',
        isValid: false,
      },
    },
    false,
  );
  const forgetPWSubmitHandler = (event) => {
    event.preventDefault();
    navigate('/auth/reset-password');
  };

  return (
    <div className='forgetPW'>
      <h2 className='forgetPW--greeting'>Forget Password</h2>
      <br />
      <p className='forgetPW--instruction'>
        Have you forgotten your password to log in to GamerLibrae.com? Just fill in the email
        address you registered with in the form below and we will send you an email to reset your
        password. For details, please follow the instructions in the email.
      </p>
      <form className='forgetPW--form' onSubmit={forgetPWSubmitHandler}>
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
        <div className='forgetPW--form--submit'>
          <CustomButton type='submit' disabled={!formState.isValid}>
            SUBMIT
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;
