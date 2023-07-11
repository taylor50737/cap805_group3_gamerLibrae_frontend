import React, { useState } from 'react';
import CustomDropdownList from '../../shared/components/FormElements/CustomDropdownList';
import CustomInput from '../../shared/components/FormElements/CustomInput';
import CustomButton from '../../shared/components/FormElements/CustomButton';
import { CustomUseForm } from '../../shared/hooks/form-hook';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
  VALIDATOR_MAXLENGTH,
} from '../../shared/util/validators';
import './InquiryForm.css';
import InquiryFormAreaTextField from './InquiryFormAreaTextField';
import InquiryFormTextField from './InquiryFormTextField';
import InquiryFormTextFieldProps from './InquiryFormTextFieldProps';
import { Button, FormControl, FormControlLabel, TextField, Checkbox } from '@mui/material';

const InquiryForm = () => {
  const inquiryAreas = [
    { title: 'Select the area that you would like to inquire', value: 'Select The Inquiry Area' },
    { title: 'General Inquiry', value: 'General Inquiry' },
    { title: 'Affiliation Program', value: 'Affiliation Program' },
    { title: 'Technical Support', value: 'Technical Support' },
    { title: 'Marketing/Partnership', value: 'Marketing/Partnership' },
    { title: 'Complaint', value: 'Complaint' },
    { title: 'Others', value: 'Others' },
  ];

  const [inquiryAreasSelected, setInquiryAreasSelected] = useState(0);

  const handleinquiryAreasSelect = (event) => {
    event.preventDefault();
    setInquiryAreasSelected(event.target.value);
  };

  const [formState, inputHandler, setFormData, resetForm] = CustomUseForm(
    {
      name: {
        value: '',
        isValid: false,
      },
      email: {
        value: '',
        isValid: false,
      },
      subjectLine: {
        value: '',
        isValid: false,
      },
      message: {
        value: '',
        isValid: false,
      },
    },
    false,
  );

  const handleInquiryAreasReset = () => {
    setInquiryAreasSelected(0);
  };

  const validatorDeterminator = (type) => {
    let validator;
    switch (type) {
      case 'email':
        validator = [VALIDATOR_EMAIL()];
        break;
      case 'max':
        validator = [VALIDATOR_MAXLENGTH(100)];
        break;
      default:
        validator = [VALIDATOR_REQUIRE()];
    }
    return validator;
  };

  const InquiryFormTextFieldMap = InquiryFormTextFieldProps.map((data) => {
    return (
      <CustomInput
        key={data.key}
        element={data.element}
        id={data.id}
        type={data.type}
        label={data.label}
        validators={validatorDeterminator(data.type)}
        errorText={data.errorText}
        onInput={inputHandler}
        reset={formState.reset}
      />
    );
  });

  const submitInquiryForm = (event) => {
    event.preventDefault();
    console.log(inquiryAreasSelected);
    console.log(formState.inputs.name.value);
    console.log(formState.inputs.email.value);
    console.log(formState.inputs.subjectLine.value);
    console.log(formState.inputs.message.value);
  };

  return (
    <div className='inquiryform'>
      <form className='inquiryform--form' onSubmit={submitInquiryForm}>
        <div className=''>
          <h4 className='inquiryform--header text-2xl'>Drop Us A Line</h4>
          <div className='inquiryform--textfield'>
            <CustomDropdownList
              optionList={inquiryAreas}
              label='Area of Inquiries'
              name='Area of Inquiries'
              value={inquiryAreasSelected}
              handleSelect={handleinquiryAreasSelect}
            />
            {InquiryFormTextFieldMap}
          </div>
        </div>
        <div className='inquiryform--button'>
          <CustomButton type='submit' disabled={!formState.isValid || inquiryAreasSelected == 0}>
            SUBMIT
          </CustomButton>
          <CustomButton type='reset' inverse onClick={resetForm}>
            RESET
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default InquiryForm;
