import { Suspense, useState } from 'react';
import { useLoaderData, Await, Form } from 'react-router-dom';

import { Button, Typography } from '@mui/material';

import ReviewEditor from '../components/ReviewEditor';
import ScoreSelector from '../components/ScoreSelector';
import GameInfo from '../components/GameInfo';
import ErrorPage from '../../Error/pages/ErrorPage';

export const ReviewEditPage = () => {
  const { gamePromise } = useLoaderData();
  const [score, setScore] = useState(50);
  const [reviewContent, setReviewContent] = useState('');
  const [reviewTitle, setReviewTitle] = useState('');

  const handleScoreChange = (newScore) => {
    setScore(newScore);
  };

  const handleReviewContentChange = (newReviewContent) => {
    setReviewContent(newReviewContent);
  };

  const handleReviewTitleChange = (newReviewTitle) => {
    setReviewTitle(newReviewTitle);
  };

  return (
    <div className='mb-24 flex-col'>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={gamePromise} errorElement={<ErrorPage />}>
          {(game) => <GameInfo game={game} />}
        </Await>
      </Suspense>

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
      <ReviewEditor
        onReviewContentChange={handleReviewContentChange}
        onReviewTitleChange={handleReviewTitleChange}
      />

      {/* Submit buttons */}
      <div className='flex justify-end'>
        <Button
          variant='contained'
          onClick={() => {
            // Insert form submission here
            // alert(`Score: ${score}\nContent: ${reviewContentHTML}`);
            // console.log(`Score: ${score}`);
            // console.log(`Content: ${reviewContentHTML}`);
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

        <Form method='post'>
          <input name='score' value={score} readOnly style={{ display: 'none' }} />
          <input name='title' value={reviewTitle} readOnly style={{ display: 'none' }} />
          <input name='content' value={reviewContent} readOnly style={{ display: 'none' }} />
          <Button
            variant='contained'
            type='submit'
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
        </Form>
      </div>
    </div>
  );
};

export default ReviewEditPage;
