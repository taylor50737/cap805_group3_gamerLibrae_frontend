import { Button, Typography } from '@mui/material';

import ReviewEditor from '../components/ReviewEditor';
import ScoreSelector from '../components/ScoreSelector';
import GameInfo from '../components/GameInfo';

export const ReviewEditPage = () => {
  let score = '';
  let reviewContentHTML = '';

  const handleScoreChange = (newScore) => {
    score = newScore;
  };

  const handleReviewContentChange = (newReviewContentHTML) => {
    reviewContentHTML = newReviewContentHTML;
  };

  return (
    <div className='flex-col mb-24'>
      <GameInfo/>
      {/* Scroll selector */}
      <Typography
        sx={{
          fontSize: 20,
          fontWeight: 800,
        }}
      >
        Select you score here:
      </Typography>
      <ScoreSelector onScoreChange={handleScoreChange} />

      {/* Review editor*/}
      <ReviewEditor onReviewContentChange={handleReviewContentChange} />

      {/* Submit buttons */}
      <div className='flex justify-end'>
        <Button
          variant='contained'
          onClick={() => {
            // Insert form submission here
            alert(`Score: ${score}\nContent: ${reviewContentHTML}`)
            console.log(`Score: ${score}`);
            console.log(`Content: ${reviewContentHTML}`);
          }}
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
          onClick={() => {
            // Insert form submission here
            alert(`Score: ${score}\nContent: ${reviewContentHTML}`)
            console.log(`Score: ${score}`);
            console.log(`Content: ${reviewContentHTML}`);
          }}
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

export default ReviewEditPage;
