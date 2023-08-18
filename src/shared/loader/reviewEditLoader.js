import { defer } from 'react-router-dom';
import { getGame } from '../api/games';

export const reviewEditLoader = async ({ request, params }) => {
  const gameRes = getGame(params.id).then(
    (res) =>
      new Promise((resolve) => {
        setTimeout(() => resolve(res), 0); // fake delay
      }),
  );

  return defer({
    gamePromise: gameRes.then((res) => res.json()),
  });
};
