import { defer } from 'react-router-dom';
import { getReview } from '../api/reviews';
import { getGame } from '../api/games';
import { getUser } from '../api/users';

export const reviewLoader = async ({ request, params }) => {
  const reviewRes = getReview(params.rid).then(
    (res) =>
      new Promise((resolve) => {
        setTimeout(() => resolve(res), 500); // fake delay
      }),
  );

  return defer({
    reviewPromise: reviewRes
      .then((res) => res.json())
      .then(async (review) => {
        const userRes = await getUser(review.creator);
        const user = await userRes.json();
        review.creatorAvatar = user.user.avatar;
        review.creatorUserName = user.user.userName;

        const gameRes = await getGame(review.game);
        const game = await gameRes.json();
        review.gameName = game.name;

        return review;
      }),
  });
};
