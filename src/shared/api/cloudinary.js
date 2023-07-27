const cloud_name = 'dpfvhna2t';
const api_key = '133115664541957';

// Referece: https://github.com/LearnWebCode/cloudinary-finished-reference/blob/main/server.js
const uploadImage = async (img, folder) => {
  // The backend will response a signature that combined folder name and api secret
  const signRes = await fetch(
    `${import.meta.env.VITE_API_PATH}/api/cloudinary/signature?folder=${folder}`,
    {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  );
  const signJson = await signRes.json();

  const formData = new FormData();
  formData.append('file', img);
  formData.append('api_key', api_key);
  formData.append('signature', signJson.signature);
  formData.append('timestamp', signJson.timestamp);
  formData.append('folder', folder);

  const cloudinaryRes = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/auto/upload`, {
    method: 'POST',
    body: formData,
  });
  return await cloudinaryRes.json();
};

export default uploadImage;
