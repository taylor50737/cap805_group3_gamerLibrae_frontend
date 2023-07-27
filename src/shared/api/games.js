export const postGame = async (postGameBody) => {
  const postGameRes = await fetch(`${import.meta.env.VITE_API_PATH}/api/games`, {
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
  return fetch(`${import.meta.env.VITE_API_PATH}/api/games?${searchParams.toString()}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

export const getGame = async (gameId) => {
  return fetch(`${import.meta.env.VITE_API_PATH}/api/games/${gameId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};
