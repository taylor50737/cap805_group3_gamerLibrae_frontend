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
  return (
    <div>
      <FormControl fullWidth>
        <div className=''>
          <h4 className='text-lg'>Drop Us A Line</h4>
          <div className='inquiryform--textfield'>
            <InquiryFormAreaTextField />
            {InquiryFormTextFieldMap}
          </div>
        </div>
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
        </div>
      </FormControl>
    </div>
  );
};

export default InquiryForm;
