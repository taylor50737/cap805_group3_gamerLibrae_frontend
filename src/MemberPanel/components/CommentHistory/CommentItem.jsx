import { Card } from '@mui/material';

const CommentItem = (props) => {
  return (
    <li>
      <Card>
        <div>
          <h2>{props.game}</h2>
          <h2>Review ID: {props.reviewId}</h2>
          <h3>Author: {props.reviewCreator}</h3>
          <p>Title: {props.reviewTitle}</p>
          <p>Comment: {props.commentContext}</p>
        </div>
      </Card>
    </li>
  );
};

export default CommentItem;
