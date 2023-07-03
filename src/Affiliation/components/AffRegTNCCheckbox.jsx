import { FormControlLabel, Checkbox, colors } from '@mui/material';

const AffRegTNCCheckbox = () => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          required
          size='small'
          sx={{
            color: '#F2F3EE',
            '&.Mui-checked': {
              color: '#F2F3EE',
            },
          }}
        />
      }
      label='By clicking on the below Submit button, I agree on the Terms and Conditions.'
      sx={{
        '& .MuiFormControlLabel-label': { color: '#F2F3EE', fontFamily: '"DM Sans", sans-serif' },
      }}
    />
  );
};

export default AffRegTNCCheckbox;
