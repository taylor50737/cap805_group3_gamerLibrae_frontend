import { defer } from 'react-router-dom';
import { getReview } from '../api/reviews';
import { getGame } from '../api/games';
import { getUser } from '../api/users';

export const reviewLoader = async ({ request, params }) => {
  console.log('review loader called');
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
        // TODO: optimized fetch API call in series
        const userRes = await getUser(review.creator);
        const user = await userRes.json();
        review.creatorAvatar = user.user.avatar;
        review.creatorUserName = user.user.userName;

        const gameRes = await getGame(review.game);
        const game = await gameRes.json();
        review.gameName = game.name;

        for (const comment of review.comments) {
          const userRes = await getUser(comment.creator);
          const user = await userRes.json();
          comment.creatorAvatar = user.user.avatar;
          comment.creatorUserName = user.user.userName;
        }
        // Lastest comment show up first
        review.comments.sort((a, b) => {
          return new Date(b.postDate) - new Date(a.postDate);
        });
        return review;
      }),
  });
};
