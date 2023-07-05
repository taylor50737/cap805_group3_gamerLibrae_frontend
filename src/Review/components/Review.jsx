import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight';
import Spoiler from '../../ReviewEdit/util/Spoiler';

import { Paper, Typography, Box } from '@mui/material';

import Score from '../../Components/Score';
import CommentCount from './CommentCount';
import Vote from './Vote';

const Review = ({ review }) => {
  const editor = useEditor({
    extensions: [
      Highlight.configure({
        multicolor: true,
      }),
      Spoiler,
      StarterKit.configure({
        paragraph: {
          HTMLAttributes: {
            class: 'text-white',
          },
        },
        heading: {
          HTMLAttributes: {
            class: 'text-white',
          },
        },
        bold: {
          HTMLAttributes: {
            class: 'text-white',
          },
        },
        bulletList: {
          HTMLAttributes: {
            class: 'marker:text-white',
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: 'marker:text-white',
          },
        },
      }),
    ],
    editorProps: {
      attributes: {
        class: 'prose max-w-none',
      },
    },
    content: review.content,
    editable: false,
  });

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
          <CommentCount count={review.comments.length} sx={{ mr: '20px' }} />
          <Vote originalVote={review.vote} sx={{ mr: '20px' }} />
          <Score score={review.score} size={90} />
        </Box>
      </Box>

      <EditorContent editor={editor} />
    </Paper>
  );
};

export default Review;
