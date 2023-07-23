import { defer } from 'react-router-dom';

export const testDeferredLoader = async () => {
  const promise = fetch('http://localhost:8080/api/users', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(
    (res) =>
      new Promise((resolve) => {
        setTimeout(() => resolve(res.json()), 2000); // fake delay
      }),
  );
  return defer({
    promise: promise,
  });
};
