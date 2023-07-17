import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './AffRule.css';
import CustomButton from '../shared/components/FormElements/CustomButton';

// You have already registered for the Affiliation Program. Please check your email inbox for the instructions to start earning points. If you have never registered, please contact us via the [object Object]

const AffRule = () => {
  const [navToAffReg, setNavToAffReg] = useState(false);
  const [responseMsg, setResponseMsg] = useState(false);

  // const affRegChecker = () => {
  useEffect(() => {
    try {
      fetch('http://localhost:8080/api/auth/users/me', {
        method: 'GET',
        credentials: 'include',
      })
        .then((response) => response.json())
        .then((json) => {
          if (!json.affiliation.affEmail) {
            setNavToAffReg(true);
          } else {
            setResponseMsg(true);
          }
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

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
        {navToAffReg ? (
          <CustomButton to={'/affiliation-registration'}>REGISTER</CustomButton>
        ) : (
          <CustomButton>REGISTER</CustomButton>
        )}
        {/* to={'/affiliation-registration'} */}
      </div>
      {responseMsg && (
        <p className='error--msg'>
          You have already registered for the Affiliation Program. Please check your email inbox for
          the instructions to start earning points. If you have never registered, please contact us
          via the <NavLink to='/contact-us'>Inquiry Form</NavLink>
        </p>
      )}
    </div>
  );
};

export default AffRule;
