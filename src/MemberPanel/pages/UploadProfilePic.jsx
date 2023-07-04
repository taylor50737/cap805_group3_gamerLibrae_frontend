import { useState } from 'react';
import CustomButton from '../../shared/components/FormElements/CustomButton';
import CustomImageUpload from '../../shared/components/FormElements/CustomImageUpload';
import { CustomUseForm } from '../../shared/hooks/form-hook';

const UploadProfilePic = () => {
  const [successSubmission, setSuccessSubmission] = useState('');
  const [formState, inputHandler, setFormData] = CustomUseForm(
    {
      image: {
        value: null,
        isValid: false,
      },
    },
    false,
  );

  const uploadPicSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
    setSuccessSubmission('You have successfully uploaded your image!');
  };

  return (
    <div className='flex flex-col items-center rounded-lg bg-gray-700 py-4 pb-4 pr-8'>
      <h1 className='text-3xl'>Upload Profile Picture</h1>
      <form
        className='flex flex-col items-center justify-center py-12'
        onSubmit={uploadPicSubmitHandler}
      >
        <CustomImageUpload center id='image' onInput={inputHandler} />
        <p className='pt-6'>{successSubmission}</p>
        <div className='auth--form--submit'>
          <CustomButton type='submit' disabled={!formState.isValid}>
            UPLOAD IMAGE
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default UploadProfilePic;
