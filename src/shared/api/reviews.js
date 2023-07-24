export const getReview = async (reviewId) => {
  return fetch(`http://localhost:8080/api/reviews/${reviewId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

export const postReview = async (gameId, review) => {
  return fetch(`http://localhost:8080/api/reviews`, {
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
