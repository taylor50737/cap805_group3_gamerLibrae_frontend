export const getReview = async (reviewId) => {
  return fetch(`http://localhost:8080/api/reviews/${reviewId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};
