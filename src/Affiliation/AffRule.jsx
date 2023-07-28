import React, { useEffect, useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './AffRule.css';
import CustomButton from '../shared/components/FormElements/CustomButton';

import useAuth from '../shared/hooks/useAuth';
import { AffContext } from '../shared/context/AffContext';

const AffRule = () => {
  const { loggedIn, affiliation } = useAuth();
  // const [affRuleButtonController, setAffRuleButtonController] = useState();
  const { fetchUserAff } = useContext(AffContext);
  const { affFormPosted, setAffFormPosted, loading, affState, setAffState } =
    useContext(AffContext);
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    // You can check if the data is already available in affFormPosted
    // If yes, set isDataFetched to true, otherwise fetch the data
    if (affFormPosted) {
      setIsDataFetched(true);
    } else {
      // Fetch the affiliation data
      fetchUserAff().then(() => {
        setIsDataFetched(true);
      });
    }
    setAffState(1);
  }, [affFormPosted, setAffState]);

  let affRuleButton;
  if (loading || !isDataFetched) {
    affRuleButton = <></>;
  } else {
    if (!loggedIn) {
      affRuleButton = <CustomButton to={'/auth'}>LOG IN TO REGISTER</CustomButton>;
    } else {
      if (affFormPosted.affContextController.affEmail) {
        affRuleButton = (
          <p className='error--msg'>
            You have already registered for the Affiliation Program. Please check your email inbox
            for the instructions to start earning points. If you have never registered, please
            contact us via the{' '}
            <NavLink to='/contact-us'>
              <u>Inquiry Form</u>
            </NavLink>
          </p>
        );
      } else {
        affRuleButton = <CustomButton to={'/affiliation-registration'}>REGISTER</CustomButton>;
      }
    }
  }

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
      <div className='affrule--reg--button'>{affRuleButton}</div>
    </div>
  );
};

export default AffRule;
