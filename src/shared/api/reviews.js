export const getReview = async (reviewId) => {
  return fetch(`${import.meta.env.VITE_API_PATH}/api/reviews/${reviewId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

export const postReview = async (gameId, review) => {
  return fetch(`${import.meta.env.VITE_API_PATH}/api/reviews`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      rating: review.score,
      title: review.title,
      content: review.content,
      gameId: gameId,
    }),
  });
};
