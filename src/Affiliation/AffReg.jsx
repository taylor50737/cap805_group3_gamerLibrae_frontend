import './AffReg.css';
import { useState } from 'react';
import { Button, FormControl, FormControlLabel, TextField, Checkbox } from '@mui/material';
import AffRegTextFieldProps from './components/AffRegTextFieldProps';
import AffTNC from './components/AffRegTNC';
import AffRegTNCCheckbox from './components/AffRegTNCCheckbox';

const AffReg = () => {
  const [affRegFormData, setAffRegFormData] = useState({
    channelUrl: 'https://',
    email: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAffRegFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
    // console.log(affRegFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(affRegFormData);
  };

  const AffRegTextFieldList = AffRegTextFieldProps.map((data) => {
    return (
      <TextField
        required
        id='outlined-basic'
        name={data.name}
        label={data.label}
        variant='filled'
        value={data.value == 'channelUrl' ? affRegFormData.channelUrl : affRegFormData.email}
        defaultValue={data.defaultValue}
        onChange={handleChange}
        InputLabelProps={{
          style: { color: 'rgba(183,183,183,0.5)' },
        }}
        sx={{
          maxWidth: { xs: '100vw', sm: '50vw' },
          paddingBottom: 4,
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
  });
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
            onClick={handleSubmit}
            type='submit'
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
            onClick={() => {
              setAffRegFormData({ channelUrl: 'https://', email: '' });
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
