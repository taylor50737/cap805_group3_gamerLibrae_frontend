import React, { useEffect, useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './AffRule.css';
import CustomButton from '../shared/components/FormElements/CustomButton';

import useAuth from '../shared/hooks/useAuth';
import { AffContext } from '../shared/context/AffContext';

// You have already registered for the Affiliation Program. Please check your email inbox for the instructions to start earning points. If you have never registered, please contact us via the [object Object]

const AffRule = () => {
  const { loggedIn, affiliation } = useAuth();
  const [responseMsg, setResponseMsg] = useState(false);
  const { fetchUserAff } = useContext(AffContext);
  const { affFormPosted, setAffFormPosted, loading, test, setTest } = useContext(AffContext);

  useEffect(() => {
    fetchUserAff;
    setTest(1);
  }, []);

  useEffect(() => {
    if (loggedIn && affFormPosted.affContextController.affEmail) {
      setResponseMsg(true);
    }
  }, [loggedIn, affFormPosted.affContextController]);

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
        {loggedIn ? (
          responseMsg ? (
            <p className='error--msg'>
              You have already registered for the Affiliation Program. Please check your email inbox
              for the instructions to start earning points. If you have never registered, please
              contact us via the{' '}
              <NavLink to='/contact-us'>
                <u>Inquiry Form</u>
              </NavLink>
            </p>
          ) : (
            <CustomButton to={'/affiliation-registration'}>REGISTER</CustomButton>
          )
        ) : (
          <CustomButton to={'/auth'}>LOG IN TO REGISTER</CustomButton>
        )}
        {/* to={'/affiliation-registration'} */}
      </div>
      {/* {responseMsg && (
        
      )} */}
    </div>
  );
};

export default AffRule;
