import React from 'react';
import '../AffSuc.css';
import CustomButton from '../../shared/components/FormElements/CustomButton';

function AffSucContentController2() {
  return (
    <>
      <div className='affsuc--block'>
        <h1 className='text-2xl'>
          Let me check who you are. Hmmmm... you have not registered for the affiliation program yet
          have you? Why don't you join it now?
        </h1>
      </div>
      <div className='affsuc--back--home--button'>
        <CustomButton to={'/affiliation-rule'}>Join Affiliation</CustomButton>
      </div>
    </>
  );
}

export default AffSucContentController2;
