import { Box, Typography } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const CommentCount = ({ count, sx }) => {
  return (
    <Box sx={{ ...sx, display: 'flex', alignItems: 'center' }}>
      <FontAwesomeIcon icon={faComment} style={{ fontSize: '20px', color: '#bbc0c7' }} />
      <Typography sx={{ ml: '5px', fontWeight: 800, fontSize: '24px', color: 'white' }}>
        {count}
      </Typography>
    </Box>
  );
};

export default CommentCount;
