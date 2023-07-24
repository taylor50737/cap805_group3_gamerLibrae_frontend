import { defer } from 'react-router-dom';
import { getGame } from '../api/games';

export const reviewEditLoader = async ({ request, params }) => {
  const gameRes = await getGame(params.id);

  return defer({
    gamePromise: gameRes.json(),
  });
};
