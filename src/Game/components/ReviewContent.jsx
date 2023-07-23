import { createRef } from 'react';
import { EditorContent } from '@tiptap/react';

import { useNavigate } from 'react-router-dom';

import { Box, Button } from '@mui/material';

import useViewOnlyEditor from '../../Review/hooks/useViewOnlyEditor';
import useIsOverflow from '/src/shared/hooks/useIsOverflow';

const maxContentPreviewHeight = 400;

const ReviewContent = ({ review }) => {
  const editor = useViewOnlyEditor({ review });
  const ref = createRef();
  const isOverflow = useIsOverflow(ref);
  const navigate = useNavigate();

  return (
    <Box
      ref={ref}
      sx={{
        maxHeight: maxContentPreviewHeight,
        overflow: 'clip',
        position: 'relative',
      }}
    >
      {/* Overlay if overflow */}
      {isOverflow && (
        <>
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(rgba(0, 0, 0, 0) , rgba(0, 0, 0, 0.75))',
              borderRadius: '14px',
              zIndex: 1000,
            }}
          />
          <Button
            variant='contained'
            onClick={() => {
              navigate(`review/${review._id}`);
            }}
            sx={{
              position: 'absolute',
              top: '95%',
              left: '50%',
              transform: 'translate(-50%, -95%)',
              zIndex: 2000,
              bgcolor: '#4e5154',
              color: 'white',
              '&:hover': { bgcolor: '#1a1919' },
              px: '4px',
              py: '2px',
              textTransform: 'none',
            }}
          >
            Read full review
          </Button>
        </>
      )}

      <EditorContent editor={editor} />
    </Box>
  );
};

export default ReviewContent;
