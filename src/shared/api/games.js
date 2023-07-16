const postGame = async (postGameBody) => {
  const postGameRes = await fetch(`http://localhost:8080/api/games`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postGameBody),
  });
  return await postGameRes.json();
};

export default postGame;
