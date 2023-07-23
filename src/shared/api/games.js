export const postGame = async (postGameBody) => {
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

export const getGames = async (searchParams) => {
  return fetch(`http://localhost:8080/api/games?${searchParams.toString()}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

export const getGame = async (gameId) => {
  return fetch(`http://localhost:8080/api/games/${gameId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};
