import { Box, Typography } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const CommentCount = ({ count, size, sx }) => {
  return (
    <Box sx={{ ...sx, display: 'flex', alignItems: 'center' }}>
      <FontAwesomeIcon icon={faComment} style={{ fontSize: size, color: '#bbc0c7' }} />
      <Typography sx={{ ml: '5px', fontWeight: 800, fontSize: size, color: 'white' }}>
        {count}
      </Typography>
    </Box>
  );
};

export default CommentCount;
