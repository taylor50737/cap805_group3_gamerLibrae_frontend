import { TextField, MenuItem } from '@mui/material';
import './InquiryFormAreaTextField.css';

const inquiryAreas = [
  'General Inquiry',
  'Affiliation Program',
  'Technical Support',
  'Marketing/Partnership',
  'Complaint',
  'Others',
];

const DropDownIcon = (props) => (
  <svg
    {...props}
    xmlns='http://www.w3.org/2000/svg'
    enableBackground='new 0 0 24 24'
    height='24px'
    viewBox='0 0 24 24'
    width='24px'
    fill='#FFFFFF'
  >
    <rect fill='none' height='24' width='24' />
    <path d='M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,15.5L7.5,11l1.42-1.41L12,12.67 l3.08-3.08L16.5,11L12,15.5z' />{' '}
  </svg>
);

const InquiryFormAreaTextField = () => {
  return (
    <div>
      <TextField
        required
        id='outlined-basic'
        label='Area of Inquiries'
        variant='filled'
        select
        SelectProps={{
          IconComponent: DropDownIcon,
          MenuProps: {
            sx: {
              '& .MuiMenu-paper': {
                bgcolor: '#1b1c20',
                border: 3,
                borderColor: '#F2F3EE',
                borderRadius: 0,
              },
            },
          },
        }}
        InputLabelProps={{
          style: { color: 'rgba(183,183,183,0.5)' },
        }}
        sx={{
          maxWidth: { xs: '100vw', sm: '50vw' },
          minWidth: { xs: '100%', sm: '25vw' },
          paddingBottom: 3.5,
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
      >
        {inquiryAreas.map((data) => (
          <MenuItem
            key={data}
            value={data}
            sx={{
              color: '#F2F3EE',
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '1rem',
              ':hover': {
                color: '#1b1c20',
                bgcolor: '#F2F3EE',
              },
              ':active': {
                color: '#F2F3EE',
              },
            }}
            selected
            className='MenuItem'
          >
            {data}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default InquiryFormAreaTextField;
