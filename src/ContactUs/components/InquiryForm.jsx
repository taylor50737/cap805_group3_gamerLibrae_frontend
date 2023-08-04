import React, { useState, useRef } from 'react';
import CustomDropdownList from '../../shared/components/FormElements/CustomDropdownList';
import CustomInput from '../../shared/components/FormElements/CustomInput';
import CustomButton from '../../shared/components/FormElements/CustomButton';
import emailjs from '@emailjs/browser';
import { uid } from 'uid';
import { CustomUseForm } from '../../shared/hooks/form-hook';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
  VALIDATOR_MAXLENGTH,
} from '../../shared/util/validators';
import './InquiryForm.css';
import InquiryFormTextFieldProps from './InquiryFormTextFieldProps';

const InquiryForm = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const form = useRef();

  const [formState, inputHandler, setFormData, resetForm] = CustomUseForm(
    {
      inquiryAreas: {
        value: 0,
      },
      inquirerName: {
        value: '',
        isValid: false,
      },
      inquirerEmail: {
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

  const submitInquiryForm = (e) => {
    e.preventDefault();
    if (
      formState.inputs.inquirerName.isValid &&
      formState.inputs.inquirerEmail.isValid &&
      formState.inputs.subjectLine.isValid &&
      formState.inputs.message.isValid
    ) {
      // handleFormSubmitted(true);
      setIsFormSubmitted(true);
      emailjs
        .sendForm('test1', 'ToTeamTemplete', form.current, 'zJsaM-W6CGcYtmZxM')
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          },
        )
        .then(
          emailjs.sendForm('test1', 'ToInquirerTemplate', form.current, 'zJsaM-W6CGcYtmZxM').then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            },
          ),
        );
    } else {
      setErrorMsg('Invalid input found.');
    }
  };

  console.log(errorMsg);
  console.log(isFormSubmitted);

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

  const inquiryAreas = [
    { title: 'General Inquiry', value: 'General Inquiry' },
    { title: 'Affiliation Program', value: 'Affiliation Program' },
    { title: 'Technical Support', value: 'Technical Support' },
    { title: 'Marketing/Partnership', value: 'Marketing/Partnership' },
    { title: 'Complaint', value: 'Complaint' },
    { title: 'Others', value: 'Others' },
  ];

  const InquiryFormTextFieldMap = InquiryFormTextFieldProps.map((data) => {
    return (
      <CustomInput
        key={data.key}
        element={data.element}
        id={data.id}
        name={data.name}
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

  return (
    <div className='inquiryform'>
      {!isFormSubmitted && (
        <form className='inquiryform--form' ref={form} onSubmit={submitInquiryForm}>
          <div>
            <h4 className='inquiryform--header text-2xl'>Drop Us A Line</h4>
            <div className='inquiryform--textfield'>
              <CustomDropdownList
                optionList={inquiryAreas}
                label='Area of Inquiries'
                name='Area_of_Inquiries'
                onInput={inputHandler}
                reset={formState.reset}
              />
              <input type='hidden' name='inquiry_id' value={uid()} />
              {InquiryFormTextFieldMap}
            </div>
          </div>
          <div className='inquiryform--button--div'>
            <CustomButton
              type='submit'
              disabled={
                !formState.inputs.inquirerName.isValid ||
                !formState.inputs.inquirerEmail.isValid ||
                !formState.inputs.subjectLine.isValid ||
                !formState.inputs.message.isValid
              }
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
          {errorMsg && <p className='error--msg'>{errorMsg}</p>}
        </form>
      )}
      {isFormSubmitted && (
        <div className='inquiryform--postsubmit'>
          <div>
            <h4>
              Your message has been successfully sent. Please check your email inbox to hear back
              from us. Thank You.
            </h4>
          </div>
          <div>
            <CustomButton
              ownClass='inquiryform--postsubmit--button'
              onClick={() => setIsFormSubmitted(false)}
            >
              BACK TO CONTACT US
            </CustomButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default InquiryForm;
