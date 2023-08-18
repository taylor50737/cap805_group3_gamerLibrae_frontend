import { defer } from 'react-router-dom';
import { getGames } from '../api/games';

export const gameSearchResultLoader = async ({ request }) => {
  console.log('loader triggered');
  const params = new URL(request.url).searchParams;
  // Force result page to display 5 games
  if (params.has('limit')) {
    params.delete('limit');
  }
  const gamesRes = getGames(params).then(
    (res) =>
      new Promise((resolve) => {
        setTimeout(() => resolve(res), 0); // fake delay
      }),
  );
  return defer({
    gamesPromise: gamesRes.then((res) => res.json()),
    headersPromise: gamesRes.then((res) => res.headers),
  });
};
