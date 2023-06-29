import { useState } from 'react';
import { useForm } from 'react-hook-form';

const ChangeInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState('');

  return (
    <div className='flex flex-col items-center rounded-lg bg-gray-700 pb-4'>
      <h1 className='text-3xl'>Change Member Info</h1>
      <div>
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <input
            {...register('userName', { required: true, maxLength: 20 })}
            aria-invalid={errors.userName ? 'true' : 'false'}
            placeholder='Username'
          />
          {errors.userName?.type === 'required' && <p role='alert'>Username is required</p>}
          {errors.userName?.type === 'maxLength' && (
            <p role='alert'>Only allow maximum 20 characters</p>
          )}
          <input
            {...register('url', { required: 'URL is required' })}
            aria-invalid={errors.url ? 'true' : 'false'}
            placeholder='YouTube/Twitch URL'
          />
          {errors.url && <p role='alert'>{errors.url?.message}</p>}
          <p>{data}</p>
          <input type='submit' />
        </form>
      </div>
    </div>
  );
};

export default ChangeInfo;
