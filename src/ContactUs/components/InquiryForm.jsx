import React, { useState } from 'react';
import CustomDropdownList from '../../shared/components/FormElements/CustomDropdownList';
import './InquiryForm.css';
import InquiryFormAreaTextField from './InquiryFormAreaTextField';
import InquiryFormTextField from './InquiryFormTextField';
import InquiryFormTextFieldProps from './InquiryFormTextFieldProps';
import { Button, FormControl, FormControlLabel, TextField, Checkbox } from '@mui/material';

const InquiryFormTextFieldMap = InquiryFormTextFieldProps.map((data) => {
  return (
    <InquiryFormTextField
      key={data.key}
      label={data.label}
      multiline={data.multiline}
      maxRows={data.maxRow}
    />
  );
});

const InquiryForm = () => {
  const inquiryAreas = [
    { title: 'General Inquiry', value: 'General Inquiry' },
    { title: 'Affiliation Program', value: 'Affiliation Program' },
    { title: 'Technical Support', value: 'Technical Support' },
    { title: 'Marketing/Partnership', value: 'Marketing/Partnership' },
    { title: 'Complaint', value: 'Complaint' },
    { title: 'Others', value: 'Others' },
  ];

  const [inquiryAreasSelected, setInquiryAreasSelected] = useState('');

  const handleinquiryAreasSelect = (event) => {
    event.preventDefault();
    setInquiryAreasSelected(event.target.value);
  };

  return (
    <div className='inquiryform'>
      <FormControl fullWidth>
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
            {/* <InquiryFormAreaTextField /> */}
            {InquiryFormTextFieldMap}
          </div>
        </div>
        <div className='affreg--button'>
          <Button
            onClick={() => {
              alert('You have submitted the form, we will contact you ASAP!');
            }}
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

export default InquiryForm;
