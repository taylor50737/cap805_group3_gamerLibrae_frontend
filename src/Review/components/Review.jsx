import { EditorContent } from '@tiptap/react';

import { Paper, Typography, Box } from '@mui/material';

import Score from '../../shared/components/Score';
import CommentCount from './CommentCount';
import Vote from './Vote';
import useViewOnlyEditor from '../hooks/useViewOnlyEditor';

const Review = ({ review }) => {
  const editor = useViewOnlyEditor({ review });
  return (
    <Paper
      elevation={10}
      sx={{
        width: '95%',
        bgcolor: '#191720',
        borderRadius: '0 0 10px 10px',
        px: '20px',
        py: '10px',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', '& > :last-child': { ml: 'auto' } }}>
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: '28px',
            color: 'white',
            textShadow: '2px 2px #3d3b36',
          }}
        >
          {review.title}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CommentCount count={review.comments.length} size={20} sx={{ mr: '20px' }} />
          <Vote originalVote={review.vote} size={20} sx={{ mr: '20px' }} />
          <Score score={review.rating} size={90} />
        </Box>
      </Box>

      <EditorContent editor={editor} />
    </Paper>
  );
};

export default Review;
