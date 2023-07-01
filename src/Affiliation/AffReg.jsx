import React from 'react';
import './AffReg.css';
import { Button, FormControl, FormControlLabel, TextField, Checkbox } from '@mui/material';
import AffRegTextField from './components/AffRegTextField';
import AffRegTextFieldProps from './components/AffRegTextFieldProps';
import AffTNC from './components/AffRegTNC';
import AffRegTNCCheckbox from './components/AffRegTNCCheckbox';

const AffRegTextFieldList = AffRegTextFieldProps.map((data) => {
  return <AffRegTextField key={data.key} label={data.label} defaultValue={data.defaultValue} />;
});

const AffReg = () => {
  return (
    <div className='affreg font-dmsans'>
      <FormControl fullWidth>
        <div className='affreg--block'>
          <h4 className='text-lg'>
            Please fill in the below form to register for the affiliation program.
          </h4>
          <div className='affreg--textfield'>{AffRegTextFieldList}</div>
        </div>
        <AffTNC />
        <AffRegTNCCheckbox />
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
              marginRight: { xs: 0, sm: 2 },
              marginBottom: { xs: 1, sm: 0 },
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
          <Button
            variant='contained'
            sx={{
              color: '#F2F3EE',
              bgcolor: 'transparent',
              borderRadius: 0.8,
              border: 1,
              borderColor: '#F2F3EE',
              marginLeft: { xs: 0, sm: 2 },
              marginTop: { xs: 1, sm: 0 },
              fontFamily: '"DM Sans", sans-serif',
              ':hover': {
                borderColor: '#F2F3EE !important',
                borderRadius: 0.8,
                bgcolor: 'rgba(183,183,183,0.5)',
                color: '#F2F3EE',
                border: 1,
              },
            }}
          >
            Reset
          </Button>
        </div>
      </FormControl>
    </div>
  );
};

export default AffReg;
