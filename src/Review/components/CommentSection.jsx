import { Box, Divider } from '@mui/material';
import Comment from './Comment';
import CommentEditor from './CommentEditor';

const CommentSection = ({ comments }) => {
  return (
    <Box sx={{ width: '95%', mt: '20px' }}>
      {/* Comment edit */}
      <CommentEditor />

      <Divider sx={{ borderBottomWidth: '2px', borderColor: '#4f5154', my: '10px' }} />

      {/* Comment display */}
      {comments.length === 0 ? (
        <div className='pb-3 text-center'>No Comment yet</div>
      ) : (
        comments.map((cm, i) => <Comment key={i} comment={cm} sx={{ mb: '20px' }} />)
      )}
    </Box>
  );
};

export default CommentSection;
