import { Card } from '@mui/material';

import CommentItem from './CommentItem';

const CommentList = (props) => {
  if (props.items.length === 0) {
    return (
      <div>
        <Card>
          <h2>No comment found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul>
      {props.items.map((comment) => (
        <CommentItem
          key={comment.id}
          id={comment.id}
          game={comment.game}
          reviewId={comment.rid}
          reviewCreator={comment.reviewCreator}
          reviewTitle={comment.reviewTitle}
          commentContext={comment.commentContext}
        />
      ))}
    </ul>
  );
};

export default CommentList;
