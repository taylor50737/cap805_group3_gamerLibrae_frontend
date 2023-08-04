export const postComment = async (reviewId, comment) => {
  return fetch(`${import.meta.env.VITE_API_PATH}/api/reviews/${reviewId}/comments`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: comment.content,
    }),
  });
};
