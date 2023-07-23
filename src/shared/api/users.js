export const getUser = async (userId) => {
  return fetch(`http://localhost:8080/api/users/${userId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};
