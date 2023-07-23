import { defer } from 'react-router-dom';
import { getGames } from '../api/games';

export const gameSearchResultLoader = async ({ request }) => {
  const x = getGames(new URL(request.url).searchParams).then(
    (res) =>
      new Promise((resolve) => {
        setTimeout(() => resolve(res), 2000); // fake delay
      }),
    //   (res) => res.json()
  );
  return defer({
    gamesPromise: x.then((res) => res.json()),
    headersPromise: x.then((res) => res.headers),
  });
};
