import { Box, Typography } from '@mui/material';

import ReviewPreview from './ReviewPreview';

const ReviewSection = ({ reviews }) => {
  // Latest reviews show first
  reviews.sort((a, b) => new Date(b.postingDate) - new Date(a.postingDate));
  console.log();
  return (
    <Box
      sx={{
        bgcolor: '#191720',
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        alignContent: 'space-evenly',
        gap: '20px',
        py: '20px',
      }}
    >
      {reviews.length >= 1 ? (
        reviews.map((review, i) => <ReviewPreview key={i} review={review} />)
      ) : (
        <Typography sx={{ fontWeight: 800, fontSize: '24px', py: '80px' }}>
          No reviews yet
        </Typography>
      )}
      {}
    </Box>
  );
};

export default ReviewSection;
