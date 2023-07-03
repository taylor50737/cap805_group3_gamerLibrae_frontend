import { Card } from '@mui/material';

import ReviewItem from './ReviewItem';

const ReviewList = (props) => {
  if (props.items.length === 0) {
    return (
      <div>
        <Card>
          <h2>No reviews found. Maybe create one?</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul>
      {props.items.map((review) => (
        <ReviewItem
          key={review.rid}
          id={review.rid}
          rid={review.gid}
          gid={review.gid}
          imageUrl={review.imageUrl}
          game={review.game}
          score={review.score}
          reviewTitle={review.reviewTitle}
          reviewContext={review.reviewContext}
          date={review.date}
          comments={review.comments}
        />
      ))}
    </ul>
  );
};

export default ReviewList;
