import { Card } from '@mui/material';

import ReviewItem from './ReviewItem';

const ReviewList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className='mx-52 my-28 flex flex-col items-center justify-center text-3xl'>
        <div>Reviews History is empty</div>
      </div>
    );
  }

  return (
    <ul>
      {props.items.map((review) => (
        <ReviewItem
          key={review.id}
          id={review.id}
          rid={review.id}
          gid={review.game}
          imageUrl={review.imageUrl}
          game={review.game}
          score={review.rating}
          reviewTitle={review.title}
          reviewContext={review.content}
          date={review.postingDate}
          comments={review.comments}
        />
      ))}
    </ul>
  );
};

export default ReviewList;
