import './AffReg.css';
import { useContext, useEffect, useState } from 'react';
import { redirect } from 'react-router-dom';
import CustomInput from '../shared/components/FormElements/CustomInput';
import CustomButton from '../shared/components/FormElements/CustomButton';
import { CustomUseForm } from '../shared/hooks/form-hook';
import { VALIDATOR_EMAIL, VALIDATOR_YOUTUBETWITCH } from '../shared/util/validators';
import AffRegTextFieldProps from './components/AffRegTextFieldProps';
import AffTNC from './components/AffRegTNC';
import CustomCheckbox from '../shared/components/FormElements/CustomCheckbox';
import { set } from 'react-hook-form';

const AffReg = () => {
  const [isTncChecked, setIsTncChecked] = useState(false);
  const [responseMsg, setResponseMsg] = useState('');

  const handleTncCheckbox = () => {
    setIsTncChecked((prevState) => !prevState);
  };

  const [formState, inputHandler, setFormData, resetForm] = CustomUseForm(
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
        reset={formState.reset}
      />
    );
  });

  const submitAffRegForm = async (event) => {
    event.preventDefault();
    try {
      fetch('http://localhost:8080/api/affiliations/', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({
          affChannelURL: formState.inputs.channelUrl.value,
          affEmail: formState.inputs.email.value,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json.message);
          if (json.message === 'Successful') {
            setResponseMsg(json.message);
            redirect('/affiliation-suc');
          } else {
            setResponseMsg(json.message);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='affreg font-dmsans'>
      <form className='affreg--form' onSubmit={submitAffRegForm}>
        <div className='affreg--block'>
          <h4 className='text-lg'>
            Please fill in the below form to register for the affiliation program.
          </h4>
          <div className='affreg--textfield'>{AffRegTextFieldList}</div>
          <AffTNC />
          <CustomCheckbox
            id='tncCheckbox'
            label='By clicking on the below Register button, I agree on the above Terms and Conditions.'
            handleClicked={handleTncCheckbox}
          />
        </div>
        <div className='affreg--button'>
          <CustomButton type='submit' disabled={!formState.isValid || !isTncChecked}>
            SUBMIT
          </CustomButton>
          <CustomButton type='reset' inverse onClick={resetForm}>
            RESET
          </CustomButton>
        </div>
        {responseMsg && <p className='error--msg'>{responseMsg}</p>}
      </form>
    </div>
  );
};

export default AffReg;
