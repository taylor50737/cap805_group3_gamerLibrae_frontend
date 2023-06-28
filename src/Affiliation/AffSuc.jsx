import React from 'react';
import './AffSuc.css';
import Button from '@mui/material/Button';

const AffSuc = () => {
  return (
    <div className='affsuc font-dmsans'>
      <div className='affsuc--block'>
        <h1 className='text-2xl'>
          Congratulations. You have successfully registered for the Affiliation Program
        </h1>
      </div>
      <div className='affsuc--block'>
        <h1 className='affsuc--next--title text-2xl'>What's Next</h1>
        <ol className='affsuc--next--list'>
          <li>
            <span className='affsuc--next--step'>Step 1.</span> Check your registered email mailbox
            for the verification steps.
          </li>
          <li>
            <span className='affsuc--next--step'>Step 2.</span> Get yourself verified as the email
            instructed.
          </li>
          <li>
            <span className='affsuc--next--step'>Step 3.</span> Boom! You are good to start earning
            points. Easy. Right?
          </li>
        </ol>
      </div>
      <div className='affsuc--back--home--button'>
        <Button
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
          Back to homepage
        </Button>
      </div>
    </div>
  );
};

export default AffSuc;
