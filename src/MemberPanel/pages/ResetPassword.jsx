import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@mui/material';

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState('');

  return (
    <div className='flex flex-col items-center rounded-lg bg-gray-700 pb-4'>
      <h1 className='text-3xl'>Change Password</h1>
      <div>
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <Input
            {...register('currentPassword', { required: true, minLength: 8 })}
            aria-invalid={errors.userName ? 'true' : 'false'}
            placeholder='Current Password'
          />
          {errors.currentPassword?.type === 'required' && (
            <p role='alert'>Current Password is required</p>
          )}
          {errors.currentPassword?.type === 'minLength' && (
            <p role='alert'>At least 8 characters</p>
          )}
          <Input
            {...register('newPassword', { required: true, minLength: 8 })}
            aria-invalid={errors.userName ? 'true' : 'false'}
            placeholder='New Password'
          />
          {errors.newPassword?.type === 'required' && <p role='alert'>New Password is required</p>}
          {errors.newPassword?.type === 'minLength' && <p role='alert'>At least 8 characters</p>}
          <Input
            {...register('confirmPassword', { required: true, minLength: 8 })}
            aria-invalid={errors.userName ? 'true' : 'false'}
            placeholder='Confirm Password'
          />
          {errors.confirmPassword?.type === 'required' && (
            <p role='alert'>Confirm Password is required</p>
          )}
          {errors.confirmPassword?.type === 'minLength' && (
            <p role='alert'>At least 8 characters</p>
          )}
          <p>{data}</p>
          <input type='submit' />
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
