import { Grid, Typography, Box, Avatar } from '@mui/material';

import { Link } from 'react-router-dom';

import Score from '../../Components/Score';
import CommentCount from '../../Review/components/CommentCount';
import Vote from '../../Review/components/Vote';
import ReviewContent from './ReviewContent';

const ReviewPreview = ({ review }) => {
  return (
    <Grid
      container
      sx={{
        width: '80%',
        px: '20px',
        py: '10px',
        borderWidth: '2px',
        borderRadius: '14px',
      }}
    >
      <Grid
        item
        md={10.5}
        sx={{ display: 'flex', alignItems: 'center', '& > :last-child': { ml: 'auto' } }}
      >
        {/* Avatar */}
        <Link to={'/profile/u1'}>
          <Avatar
            src={review.avatar}
            style={{ width: '32px', height: '32px', marginRight: '10px' }}
          />
        </Link>

        {/* User name */}
        <Link to={'/profile/u1'}>
          <Typography sx={{ fontSize: '14px', color: 'darkgray' }}>{review.userName}</Typography>
        </Link>

        {/* Last child */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CommentCount count={review.commentCount} size={18} sx={{ mr: '18px' }} />
          <Vote originalVote={review.vote} size={18} />
        </Box>
      </Grid>

      {/* Date */}
      <Grid
        item
        md={1.5}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100%',
        }}
      >
        <Typography sx={{ fontSize: '14px', color: 'darkgray' }}>{review.postdate}</Typography>
      </Grid>

      {/* Title */}
      <Grid
        item
        md={10.5}
        sx={{
          py: '5px',
          '&:hover': { bgcolor: '#262330', borderRadius: '4px' },
          transition: '0.1s all 0.1s',
        }}
      >
        <Link to={'/game/123/review/123'}>
          <Typography sx={{ fontWeight: 800, fontSize: '20px' }}>{review.title}</Typography>
        </Link>
      </Grid>

      {/* Empty cell */}
      <Grid item md={1.5} />

      {/* Content */}
      <Grid item md={10.5}>
        <ReviewContent review={review} />
      </Grid>

      {/* Score */}
      <Grid
        item
        md={1.5}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          minHeight: '100%',
        }}
      >
        <Score score={review.score} size={100} />
      </Grid>
    </Grid>
  );
};

export default ReviewPreview;
