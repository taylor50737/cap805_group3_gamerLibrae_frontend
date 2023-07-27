import { useState } from 'react';

import CustomInput from '../../shared/components/FormElements/CustomInput';
import CustomButton from '../../shared/components/FormElements/CustomButton';
import { CustomUseForm } from '../../shared/hooks/form-hook';
import { VALIDATOR_REQUIRE, VALIDATOR_YOUTUBETWITCH } from '../../shared/util/validators';

const ChangeInfo = () => {
  const [responseMsg, setResponseMsg] = useState('');
  const [formState, inputHandler, setFormData] = CustomUseForm(
    {
      userName: {
        value: '',
        isValid: false,
      },
      url: {
        value: '',
        isValid: false,
      },
    },
    false,
  );
  const changeInfoSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      fetch(`${import.meta.env.VITE_API_PATH}/api/users/change-info`, {
        method: 'PATCH',
        credentials: 'include',
        body: JSON.stringify({
          userName: formState.inputs.userName.value,
          url: formState.inputs.url.value,
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
    <div className='flex flex-col items-center rounded-lg bg-gray-700 p-4 pb-4'>
      <h2 className='text-3xl'>Change Info</h2>
      <form className='flex flex-col items-center' onSubmit={changeInfoSubmitHandler}>
        <CustomInput
          element='input'
          id='userName'
          type='text'
          label='Username'
          placeholder='Enter your new username'
          validators={[VALIDATOR_REQUIRE()]}
          errorText='You must enter your username'
          onInput={inputHandler}
        />
        <CustomInput
          element='input'
          id='url'
          type='text'
          label='Youtube/Twitch URL'
          placeholder='Enter your Youtube/Twitch URL'
          validators={[VALIDATOR_YOUTUBETWITCH()]}
          errorText='Please enter a valid Youtube/Twitch URL.'
          onInput={inputHandler}
        />
        {responseMsg === 'You have successfully changed your info!' ? (
          <p className='py-3'>{responseMsg}</p>
        ) : (
          <p className='py-3 text-red-600'>{responseMsg}</p>
        )}
        <div>
          <CustomButton type='submit' disabled={!formState.isValid}>
            SUBMIT
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default ChangeInfo;
