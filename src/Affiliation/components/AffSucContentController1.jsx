import React from 'react';
import '../AffSuc.css';
import CustomButton from '../../shared/components/FormElements/CustomButton';

function AffSucContentController1() {
  return (
    <>
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
        <CustomButton to={'/'}>Back to homepage</CustomButton>
      </div>
    </>
  );
}

export default AffSucContentController1;
