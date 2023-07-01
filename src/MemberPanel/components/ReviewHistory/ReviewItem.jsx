import { Card } from '@mui/material';

const ReviewItem = (props) => {
  return (
    <li>
      <Card>
        <div>
          <img src={props.imageUrl} alt={props.game} />
          <h2>Score: {props.score}</h2>
          <h2>{props.game}</h2>
          <h3>{props.reviewTitle}</h3>
          <p>{props.reviewContext}</p>
          <p>Comments: {props.comments}</p>
        </div>
      </Card>
    </li>
  );
};

export default ReviewItem;
