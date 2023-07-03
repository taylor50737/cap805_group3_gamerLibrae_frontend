import './AffReg.css';
import { useState } from 'react';
import CustomInput from '../shared/components/FormElements/CustomInput';
import CustomButton from '../shared/components/FormElements/CustomButton';
import CustomTextButton from '../shared/components/FormElements/CustomTextButton';
import { CustomUseForm } from '../shared/hooks/form-hook';
import { VALIDATOR_EMAIL, VALIDATOR_YOUTUBETWITCH } from '../shared/util/validators';
import { Button, FormControl, FormControlLabel, TextField, Checkbox } from '@mui/material';
import AffRegTextFieldProps from './components/AffRegTextFieldProps';
import AffTNC from './components/AffRegTNC';
import AffRegTNCCheckbox from './components/AffRegTNCCheckbox';

const AffReg = () => {
  // const [affRegFormData, setAffRegFormData] = useState({
  //   channelUrl: 'https://',
  //   email: '',
  // });

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setAffRegFormData((prevState) => {
  //     return {
  //       ...prevState,
  //       [name]: value,
  //     };
  //   });
  //   // console.log(affRegFormData);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // console.log(affRegFormData);
  // };

  const [formState, inputHandler, setFormData] = CustomUseForm(
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
      // <TextField
      //   required
      //   id='outlined-basic'
      //   name={data.name}
      //   label={data.label}
      //   // variant='filled'
      //   value={data.value == 'channelUrl' ? affRegFormData.channelUrl : affRegFormData.email}
      //   defaultValue={data.defaultValue}
      //   onChange={handleChange}
      //   InputLabelProps={{
      //     style: { color: 'rgba(183,183,183,0.5)' },
      //   }}
      //   sx={{
      //     maxWidth: { xs: '100vw', sm: '50vw' },
      //     marginBottom: 4,
      //     fieldset: {
      //       border: 2,
      //       borderColor: '#F2F3EE',
      //       borderRadius: 0.8,
      //       color: '#F2F3EE',
      //     },
      //     '&:hover fieldset': {
      //       borderColor: '#8386f5 !important',
      //     },
      //     '& .MuiInputLabel-root': {
      //       color: '#B7B7B7',
      //       fontFamily: '"DM Sans", sans-serif',
      //       fontSize: '1rem',
      //     },
      //     '& .MuiOutlinedInput-input': {
      //       color: '#F2F3EE',
      //       fontFamily: '"DM Sans", sans-serif',
      //       fontSize: '1rem',
      //       ':hover': {
      //         color: '#F2F3EE',
      //         borderColor: '#F2F3EE',
      //       },
      //     },
      //     // '& .MuiInputLabel-root': {
      //     //   color: '#B7B7B7',
      //     //   fontFamily: '"DM Sans", sans-serif',
      //     //   fontSize: '1rem',
      //     // },
      //     // '& .MuiFilledInput-root': {
      //     //   border: 2,
      //     //   borderColor: '#F2F3EE',
      //     //   borderRadius: 0.8,
      //     //   '::before, ::after': {
      //     //     borderBottom: '0 !important',
      //     //   },
      //     //   ':hover': {
      //     //     borderBottom: 2,
      //     //     borderColor: '#F2F3EE',
      //     //     borderRadius: 0.8,
      //     //     bgcolor: 'rgba(183, 183, 183, 0.2)',
      //     //   },
      //     // },
      //     // '& .MuiFilledInput-input': {
      //     //   color: '#F2F3EE',
      //     //   fontFamily: '"DM Sans", sans-serif',
      //     //   fontSize: '1rem',
      //     //   ':hover': {
      //     //     color: '#F2F3EE',
      //     //   },
      //     // },
      //   }}
      // />
    );
  });
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
