import { useState } from 'react';
import { useFetcher } from 'react-router-dom';

import { Box, TextField, IconButton, Avatar } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import penguin from '/images/avatar/penguin.png';
import useAuth from '../../shared/hooks/useAuth';

const CommentEditor = () => {
  const fetcher = useFetcher();
  const { loggedIn } = useAuth();
  const [content, setContent] = useState('');

  return loggedIn ? (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Avatar src={penguin} style={{ height: 36, width: 36, marginLeft: 20 }} />
      <TextField
        multiline
        maxRows={3}
        variant='outlined'
        value={content}
        onChange={(event) => {
          setContent(event.target.value);
        }}
        inputProps={{ maxLength: 320 }}
        InputProps={{
          endAdornment: (
            <fetcher.Form method='POST'>
              <input name='content' value={content} readOnly style={{ display: 'none' }} />
              <IconButton type='submit'>
                <FontAwesomeIcon icon={faPaperPlane} size='sm' style={{ color: '#ffffff' }} />
              </IconButton>
            </fetcher.Form>
          ),
        }}
        sx={{
          width: '100%',
          mx: '20px',
          my: '10px',
          borderWidth: '20px',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderWidth: '1.5px',
              borderColor: 'white',
            },
            '&:hover fieldset': {
              borderWidth: '1.5px',
              borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
              borderWidth: '2px',
              borderColor: 'white',
            },
          },
          '& .MuiInputBase-multiline': {
            px: '8px',
            py: '4px',
            color: 'white',
          },
        }}
      />
    </Box>
  ) : (
    <span>Log in to post comment</span>
  );
};

export default CommentEditor;
