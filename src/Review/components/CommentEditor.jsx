import { Box, TextField, IconButton } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import penguin from '/src/assets/avatar/penguin.png';

const CommentEditor = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <img
        src={penguin}
        height={36}
        width={36}
        style={{ display: 'inline-block', marginLeft: 20 }}
      />
      <TextField
        multiline
        maxRows={3}
        variant='outlined'
        inputProps={{ maxLength: 320 }}
        InputProps={{
          endAdornment: (
            <IconButton
              onClick={() => {
                alert('submit');
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
