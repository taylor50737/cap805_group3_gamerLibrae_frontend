import { useState } from 'react';
import CustomButton from '../../shared/components/FormElements/CustomButton';
import CustomImageUpload from '../../shared/components/FormElements/CustomImageUpload';
import { CustomUseForm } from '../../shared/hooks/form-hook';
import uploadImage from '../../shared/api/cloudinary';

const UploadProfilePic = () => {
  const [successSubmission, setSuccessSubmission] = useState('');
  const [responseMsg, setResponseMsg] = useState('');
  const [formState, inputHandler, setFormData, resetForm] = CustomUseForm(
    {
      image: {
        value: null,
        isValid: false,
      },
    },
    false,
  );

  // const uploadPicSubmitHandler = async (event) => {
  //   event.preventDefault();
  //   console.log(formState.inputs);
  //   setSuccessSubmission('You have successfully uploaded your image!');
  // };

  const uploadPicSubmitHandler = async (e) => {
    e.preventDefault();
    const avatarResBody = await uploadImage(formState.inputs.image.value, 'avatar/');
    console.log(typeof avatarResBody.public_id);
    try {
      await fetch(`${import.meta.env.VITE_API_PATH}/api/users/change-profilepic`, {
        method: 'PATCH',
        credentials: 'include',
        body: JSON.stringify({
          avatar: avatarResBody.public_id,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
          setResponseMsg(json.message);
          console.log(json.message);
        });
    } catch (err) {
      console.log(err);
    }
    setSuccessSubmission('You have successfully uploaded your image!');
  };

  // console.log(formState.inputs.image.value);

  return (
    <div className='flex flex-col items-center rounded-lg bg-gray-700 py-4 pb-4 pr-8'>
      <h1 className='text-3xl'>Upload Profile Picture</h1>
      <form
        className='flex flex-col items-center justify-center py-12'
        onSubmit={uploadPicSubmitHandler}
      >
        <CustomImageUpload center id='image' onInput={inputHandler} onReset={resetForm} />
        <p className='pt-6'>{successSubmission}</p>
        <div className='auth--form--submit'>
          <CustomButton
            type='submit'
            disabled={!formState.isValid}
            onClick={uploadPicSubmitHandler}
          >
            UPLOAD IMAGE
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default UploadProfilePic;
