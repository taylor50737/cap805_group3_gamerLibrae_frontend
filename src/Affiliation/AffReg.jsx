import './AffReg.css';
import { useState } from 'react';
import CustomInput from '../shared/components/FormElements/CustomInput';
import CustomButton from '../shared/components/FormElements/CustomButton';
import { CustomUseForm } from '../shared/hooks/form-hook';
import { VALIDATOR_EMAIL, VALIDATOR_YOUTUBETWITCH } from '../shared/util/validators';
import { Button, FormControl, FormControlLabel, TextField, Checkbox } from '@mui/material';
import AffRegTextFieldProps from './components/AffRegTextFieldProps';
import AffTNC from './components/AffRegTNC';
import AffRegTNCCheckbox from './components/AffRegTNCCheckbox';

const AffReg = () => {
  const [formState, inputHandler, setFormData, clearInput] = CustomUseForm(
    {
      channelUrl: {
        value: '',
        isValid: false,
      },
      email: {
        value: '',
        isValid: false,
      },
    },
    false,
  );

  const AffRegTextFieldList = AffRegTextFieldProps.map((data) => {
    return (
      <CustomInput
        key={data.key}
        element='input'
        id={data.id}
        type={data.type}
        label={data.label}
        validators={data.type === 'email' ? [VALIDATOR_EMAIL()] : [VALIDATOR_YOUTUBETWITCH()]}
        errorText={data.errorText}
        onInput={inputHandler}
      />
    );
  });

  // const clearFormData = () => {
  //   clearInput({
  //     channelUrl: {
  //       value: '',
  //       isValid: false,
  //     },
  //     email: {
  //       value: '',
  //       isValid: false,
  //     },
  //   });
  //   console.log(formState.inputs.channelUrl.value);
  //   console.log(formState.inputs.email.value);
  // };

  return (
    <div className='affreg font-dmsans'>
      <form className='affreg--form'>
        <div className='affreg--block'>
          <h4 className='text-lg'>
            Please fill in the below form to register for the affiliation program.
          </h4>
          <div className='affreg--textfield'>{AffRegTextFieldList}</div>
          <AffTNC />
          <AffRegTNCCheckbox />
        </div>
        <div className='affreg--button'>
          <CustomButton type='submit' disabled={!formState.isValid}>
            SUBMIT
          </CustomButton>
          <CustomButton type='reset' inverse>
            RESET
          </CustomButton>
          {/* <Button
            variant='contained'
            // onClick={handleSubmit}
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
            // onClick={() => {
            //   setAffRegFormData({ channelUrl: 'https://', email: '' });
            // }}
          >
            Reset
          </Button> */}
        </div>
      </form>
    </div>
  );
};

export default AffReg;
