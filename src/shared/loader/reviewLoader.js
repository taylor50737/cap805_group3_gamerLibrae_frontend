import { defer } from 'react-router-dom';
import { getReview } from '../api/reviews';
import { getGame } from '../api/games';
import { getUser } from '../api/users';

export const reviewLoader = async ({ request, params }) => {
  const reviewRes = await getReview(params.rid);

  return defer({
    reviewPromise: reviewRes.json().then(async (review) => {
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
