import { useState } from 'react';

import { Box, TextField, IconButton, Avatar } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import penguin from '/src/assets/avatar/penguin.png';

const CommentEditor = () => {
  const [text, setText] = useState('');

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Avatar src={penguin} style={{ height: 36, width: 36, marginLeft: 20 }} />
      <TextField
        multiline
        maxRows={3}
        variant='outlined'
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
        inputProps={{ maxLength: 320 }}
        InputProps={{
          endAdornment: (
            <IconButton
              onClick={() => {
                setText('');
                alert(text);
              }}
            >
              <FontAwesomeIcon icon={faPaperPlane} size='sm' style={{ color: '#ffffff' }} />
            </IconButton>
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
  );
};

export default CommentEditor;
