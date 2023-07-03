import ReviewHistory from '../components/ReviewHistory/ReviewHistory';
import CommentHistory from '../components/CommentHistory/CommentHistory';

const ReviewCommentHistory = () => {
  return (
    <>
      <div>
        <ReviewHistory />
      </div>
      <div className='py-4'>
        <CommentHistory />
      </div>
    </>
  );
};

export default ReviewCommentHistory;
