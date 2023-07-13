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
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const submitInquiryForm = (prev) => {
    setIsFormSubmitted(prev);
  };

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
        <form className='inquiryform--form' onSubmit={() => submitInquiryForm(true)}>
          <div>
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
              disabled={
                !formState.inputs.name.isValid ||
                !formState.inputs.email.isValid ||
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
