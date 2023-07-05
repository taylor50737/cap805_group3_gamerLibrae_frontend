import { useState } from 'react';

import { Box, Paper, Breadcrumbs, Typography, Menu, MenuItem, IconButton } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faEllipsis, faFlag } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

const breadCrumbSx = {
  color: 'white',
  fontSize: '20px',
};

const Banner = ({ review }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Paper
      elevation={10}
      sx={{
        bgcolor: '#3a364a',
        width: '100%',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        '& > :last-child': { ml: 'auto' },
      }}
    >
      {/* Avatar */}
      <Link to={`/profile/${review.userId}`}>
        <img
          src={review.avatar}
          width={64}
          height={64}
          style={{ display: 'inline-block', marginLeft: '20px' }}
        />
      </Link>

      {/* Breadcrumbs */}
      <Breadcrumbs
        separator={<FontAwesomeIcon icon={faAnglesRight} style={{ color: '#a0a0a3' }} />}
        sx={{ ml: '20px' }}
      >
        <Link to={`/profile/${review.userId}`}>
          <Typography sx={breadCrumbSx}>{review.userName}</Typography>
        </Link>

        <Link to={`/game/${review.gameId}`}>
          <Typography sx={{ ...breadCrumbSx, fontWeight: 600 }}>{review.gameName}</Typography>
        </Link>
      </Breadcrumbs>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose} disableRipple>
          <FontAwesomeIcon icon={faFlag} style={{ marginRight: '10px' }} />
          Report
        </MenuItem>
      </Menu>

      {/* Last child */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography sx={{ fontSize: '16px', color: '#bbc0c7', mx: '10px' }}>
          {review.postdate}
        </Typography>
        <IconButton onClick={handleClick} sx={{ mr: '10px' }}>
          <FontAwesomeIcon icon={faEllipsis} style={{ color: '#bbc0c7' }} />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default Banner;
