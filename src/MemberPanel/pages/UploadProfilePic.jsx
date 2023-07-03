import React, { useState } from 'react';

const UploadProfilePic = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className='flex flex-col items-center rounded-lg bg-gray-700 pb-4'>
      <h1 className='text-3xl'>Upload Profile Picture</h1>
      <form>
        {selectedImage && (
          <div>
            <img
              alt='not found'
              width={'250px'}
              src={URL.createObjectURL(selectedImage)}
              className='h-48 w-48 rounded-full'
            />
            <br />
            <button onClick={() => setSelectedImage(null)}>Remove</button>
          </div>
        )}

        <br />
        <br />

        <input
          type='file'
          name='myImage'
          onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
          }}
        />
        <input type='submit' />
      </form>
    </div>
  );
};

export default UploadProfilePic;
