import React from 'react';
import { Button, FormControl, FormControlLabel, TextField, Checkbox } from '@mui/material';

const AffReg = () => {
  return (
    <div className='affrule font-dmsans'>
      <FormControl>
        <div className='affrule--block'>
          <h4 className='text-lg'>Please fill in the below form to register.</h4>
          <TextField id='outlined-basic' label='Outlined' variant='outlined' />
          <TextField id='outlined-basic' label='Outlined' variant='outlined' />
        </div>
        <div className='affrule--block'>
          <h4 className='text-lg'>Terms and Conditions</h4>
          <p className='affrule--para'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
        </div>
        <FormControlLabel
          required
          control={<Checkbox />}
          label='By clicking on the below Register button, I agree on the Terms and Conditions.'
        />
        <div className='affreg--button'>
          <Button
            variant='contained'
            sx={{
              color: '#0D0C11',
              bgcolor: '#F2F3EE',
              borderRadius: 0.8,
              border: 1,
              borderColor: '#F2F3EE',
              fontFamily: '"DM Sans", sans-serif',
              ':hover': {
                borderColor: '#F2F3EE !important',
                borderRadius: 0.8,
                bgcolor: 'transparent',
                color: '#F2F3EE',
                border: 1,
              },
            }}
          >
            Reset
          </Button>
          <Button
            variant='contained'
            sx={{
              color: '#0D0C11',
              bgcolor: '#F2F3EE',
              borderRadius: 0.8,
              border: 1,
              borderColor: '#F2F3EE',
              fontFamily: '"DM Sans", sans-serif',
              ':hover': {
                borderColor: '#F2F3EE !important',
                borderRadius: 0.8,
                bgcolor: 'transparent',
                color: '#F2F3EE',
                border: 1,
              },
            }}
          >
            Submit
          </Button>
        </div>
      </FormControl>
    </div>
  );
};

export default AffReg;
