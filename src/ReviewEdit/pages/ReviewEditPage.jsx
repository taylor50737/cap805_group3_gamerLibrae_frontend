import { Button, Typography } from '@mui/material';

import ReviewEditor from '../components/ReviewEditor';
import ScoreSelector from '../components/ScoreSelector';

export const ReviewEditPage = () => {
  return (
    <div className='flex-col'>
      {/* Scroll selector */}
      <Typography
        sx={{
          fontSize: 20,
          fontWeight: 800,
        }}
      >
        Select you score here:
      </Typography>
      <ScoreSelector />

      {/* Review editor*/}
      <ReviewEditor />

      {/* Submit buttons */}
      <div className='flex justify-end'>
        <Button
          variant='contained'
          onClick={() => console.log('save draft')}
          sx={{
            my: 2,
            mr: 4,
            color: '#0d0c11',
            bgcolor: '#d9d9d9',
            '&:hover': {
              color: '#0d0c11',
              backgroundColor: '#d9d9d9',
              opacity: 0.8,
            },
          }}
        >
          Save draft
        </Button>

        <Button
          variant='contained'
          onClick={() => console.log(editor.getHTML())}
          sx={{
            my: 2,
            color: '#FFFFFF',
            bgcolor: '#565656',
            '&:hover': {
              color: '#FFFFFF',
              backgroundColor: '#565656',
              opacity: 0.8,
            },
          }}
        >
          Post review
        </Button>
      </div>
    </div>
  );
};

export default ReviewEditor;
