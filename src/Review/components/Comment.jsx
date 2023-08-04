import { useState } from 'react';
import { Box, Typography, Menu, MenuItem, Avatar } from '@mui/material';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faUser } from '@fortawesome/free-solid-svg-icons';

import { iso8601dateToString } from '../../shared/util/iso8601dateToString';

const Comment = ({ comment, sx }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ ...sx, display: 'flex', alignItems: 'center' }}>
      <Avatar
        src={comment.creatorAvatar}
        onClick={handleClick}
        sx={{ height: '36px', width: '36px', ml: '20px', '&:hover': { cursor: 'pointer' } }}
      />

      {/* Popup menu, only show when avatar clicked */}
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose} disableRipple>
          <Link to={`/profile/${comment.creator}`}>
            <FontAwesomeIcon icon={faUser} style={{ marginRight: '10px' }} />
            Profile
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <FontAwesomeIcon icon={faFlag} style={{ marginRight: '10px' }} />
          Report
        </MenuItem>
      </Menu>

      <Box sx={{ display: 'flex', flexDirection: 'column', ml: '20px' }}>
        <Box>
          <Link to={`/profile/${comment.creator}`}>
            <Typography
              sx={{ display: 'inline-block', mr: '20px', fontSize: '14px', color: 'gray' }}
            >
              {comment.creatorUserName}
            </Typography>
          </Link>

          <Typography sx={{ display: 'inline-block', color: '#bbc0c7', fontSize: '14px' }}>
            {iso8601dateToString(comment.postDate)}
          </Typography>
        </Box>
        <Typography sx={{ color: 'white' }}>{comment.content}</Typography>
      </Box>
    </Box>
  );
};

export default Comment;
