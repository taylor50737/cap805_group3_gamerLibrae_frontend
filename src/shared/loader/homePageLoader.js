import { defer } from 'react-router-dom';
import { getGames } from '../api/games';

export const homePageLoader = async () => {
  const TOP_GAMES_NUMBER = 6;
  const CAROUSEL_GAMES_NUBMER = 5;

  const carouselSearchParams = new URLSearchParams(
    `limit=${CAROUSEL_GAMES_NUBMER}&sort=releaseDate`,
  );
  const topGamesSearchParams = new URLSearchParams(`limit=${TOP_GAMES_NUMBER}&sort=score`);

  const carouselResProm = getGames(carouselSearchParams);
  const topGamesResProm = getGames(topGamesSearchParams);

  return defer({
    carouselPromise: carouselResProm.then((res) => res.json()),
    topGamesPromise: topGamesResProm.then((res) => res.json()),
  });
};
