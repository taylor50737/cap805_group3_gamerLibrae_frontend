import React from 'react';
import './AffRule.css';
import Button from '@mui/material/Button';

const AffRule = () => {
  return (
    <div className='affrule font-dmsans'>
      <div className='affrule--block'>
        <h1 className='text-2xl'>About The Affiliation Rewards Program</h1>
        <p className='affrule--para'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>
      <div className='affrule--block'>
        <h1 className='text-2xl'>Rules of the Program</h1>
        <p className='affrule--para'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>
      <div className='affrule--reg--button'>
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
          Register
        </Button>
      </div>
    </div>
  );
};

export default AffRule;
