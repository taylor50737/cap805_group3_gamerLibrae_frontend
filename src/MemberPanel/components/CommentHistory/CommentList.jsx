import { Card } from '@mui/material';

import CommentItem from './CommentItem';

const CommentList = (props) => {
  if (props.items.length === 0) {
    return (
      <div>
        <div className='mx-52 my-28 flex flex-col items-center justify-center text-3xl'>
          <div>Comments History is empty</div>
        </div>
      </div>
    );
  }

  return (
    <ul>
      {props.items.map((comment) => (
        <CommentItem
          key={comment.id}
          id={comment.id}
          gid={comment.review.game.id}
          game={comment.review.game.name}
          reviewId={comment.review.id}
          reviewCreatorId={comment.review.creator.id}
          reviewCreator={comment.review.creator.userName}
          reviewTitle={comment.review.title}
          commentContext={comment.content}
          date={comment.postDate}
        />
      ))}
    </ul>
  );
};

export default CommentList;
