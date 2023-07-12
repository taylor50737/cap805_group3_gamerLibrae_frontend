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
import InquiryFormTextFieldProps from './InquiryFormTextFieldProps';

const InquiryForm = () => {
  const inquiryAreas = [
    { title: 'General Inquiry', value: 'General Inquiry' },
    { title: 'Affiliation Program', value: 'Affiliation Program' },
    { title: 'Technical Support', value: 'Technical Support' },
    { title: 'Marketing/Partnership', value: 'Marketing/Partnership' },
    { title: 'Complaint', value: 'Complaint' },
    { title: 'Others', value: 'Others' },
  ];

  const [formState, inputHandler, setFormData, resetForm] = CustomUseForm(
    {
      inquiryAreas: {
        value: 0,
      },
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

  const validatorDeterminator = (type) => {
    let validator;
    switch (type) {
      case 'email':
        validator = [VALIDATOR_EMAIL()];
        break;
      case 'max--text':
        validator = [VALIDATOR_MAXLENGTH(200)] || [VALIDATOR_REQUIRE()];
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
        ownClass='inquiryform--textfield'
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
              onInput={inputHandler}
              reset={formState.reset}
            />
            {InquiryFormTextFieldMap}
          </div>
        </div>
        <div className='inquiryform--button--div'>
          <CustomButton
            type='submit'
            disabled={!formState.isValid || inquiryAreasSelected == 0}
            ownClass='inquiryform--button'
          >
            SUBMIT
          </CustomButton>
          <CustomButton
            type='reset'
            inverse
            onClick={resetForm}
            ownClass='inquiryform--button'
            className='button--big'
          >
            RESET
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default InquiryForm;
