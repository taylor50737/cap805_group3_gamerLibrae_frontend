export const getUser = async (userId) => {
  return fetch(`${import.meta.env.VITE_API_PATH}/api/users/${userId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};
