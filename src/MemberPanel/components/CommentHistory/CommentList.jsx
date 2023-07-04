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
          key={comment.cid}
          id={comment.cid}
          gid={comment.gid}
          game={comment.game}
          reviewId={comment.rid}
          reviewCreatorId={comment.reviewCreatorId}
          reviewCreator={comment.reviewCreator}
          reviewTitle={comment.reviewTitle}
          commentContext={comment.commentContext}
          date={comment.date}
        />
      ))}
    </ul>
  );
};

export default CommentList;
