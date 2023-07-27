import { defer } from 'react-router-dom';
import { getGame } from '../api/games';
import { getUser } from '../api/users';

export const gamePageLoader = async ({ request, params }) => {
  const gameRes = getGame(params.id).then(
    (res) =>
      new Promise((resolve) => {
        setTimeout(() => resolve(res), 500); // fake delay
      }),
  );

  return defer({
    // not sure what will happen for an async function inside then...
    gamePromise: gameRes
      .then((res) => res.json())
      .then(async (game) => {
        await Promise.all(
          game.reviews.map(async (review) => {
            const res = await getUser(review.creator);
            const user = await res.json();
            review.creatorAvatar = user.user.avatar;
            review.creatorUserName = user.user.userName;
          }),
        );
        return game;
      }),
  });
};
