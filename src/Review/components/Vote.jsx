import { useState } from 'react';

import { Box, IconButton, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpLong, faDownLong } from '@fortawesome/free-solid-svg-icons';

const Vote = ({ originalVote, sx }) => {
  const [count, setCount] = useState(originalVote);
  const [voteType, setVoteType] = useState('');

  const handleUpvote = () => {
    if (!voteType) {
      setCount((v) => v + 1);
    } else if (voteType === 'downvote') {
      setCount((v) => v + 2);
    }
    setVoteType('upvote');
  };

  const handleDownvote = () => {
    if (!voteType) {
      setCount((v) => v - 1);
    } else if (voteType === 'upvote') {
      setCount((v) => v - 2);
    }
    setVoteType('downvote');
  };

  return (
    <Box sx={{ ...sx, display: 'flex', alignItems: 'center' }}>
      {/* Downvote */}
      <IconButton onClick={handleDownvote}>
        <FontAwesomeIcon
          icon={faDownLong}
          style={{ color: voteType === 'downvote' ? '#fc686a' : '#bbc0c7' }}
        />
      </IconButton>

      <Typography
        sx={{
          fontWeight: 800,
          color: voteType === 'downvote' ? '#fc686a' : voteType === 'upvote' ? '#2eff8f' : 'white',
          fontSize: '20px',
        }}
      >
        {count}
      </Typography>

      {/* Upvote */}
      <IconButton onClick={handleUpvote}>
        <FontAwesomeIcon
          icon={faUpLong}
          style={{ color: voteType === 'upvote' ? '#2eff8f' : '#bbc0c7' }}
        />
      </IconButton>
    </Box>
  );
};

export default Vote;
