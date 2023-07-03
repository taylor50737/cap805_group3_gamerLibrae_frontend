import { TextField } from '@mui/material';

const InquiryFormTextField = (props) => {
  return (
    <TextField
      required
      id='outlined-basic'
      label={props.label}
      variant='filled'
      multiline={props.multiline}
      maxRows={props.maxRows}
      select={props.select}
      InputLabelProps={{
        style: { color: 'rgba(183,183,183,0.5)' },
      }}
      sx={{
        maxWidth: { xs: '100vw', sm: '50vw' },
        minWidth: { sm: '25vw' },
        paddingBottom: 3.5,
        '& .MuiInputLabel-root': {
          color: '#B7B7B7',
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '1rem',
        },
        '& .MuiFilledInput-root': {
          border: 2,
          borderColor: '#F2F3EE',
          borderRadius: 0.8,
          '::before, ::after': {
            borderBottom: '0 !important',
          },
          ':hover': {
            borderBottom: 2,
            borderColor: '#F2F3EE',
            borderRadius: 0.8,
            bgcolor: 'rgba(183, 183, 183, 0.2)',
          },
        },
        '& .MuiFilledInput-input': {
          color: '#F2F3EE',
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '1rem',
          ':hover': {
            color: '#F2F3EE',
          },
        },
      }}
    />
  );
};

export default InquiryFormTextField;
