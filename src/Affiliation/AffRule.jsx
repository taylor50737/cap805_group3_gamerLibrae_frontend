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
        <p className='affrule--para affrule--about--aff'>
          Are you a YouTube/Twitch channel owner? Help us help you! <br />
          <br /> Join the Affiliation Rewards Program today to earn points. By enrolling in this
          program and providing us with your YouTube or Twitch channel URL, you gain access to a
          unique link that you can incorporate into your videos. Whenever viewers visit our website
          through your link, the traffic generated will be counted towards your reward points. The
          more traffic you drive, the more reward points you earn! It's a win-win collaboration,
          where you get to benefit from promoting our platform while earning rewards for your
          valuable contributions. Join our Affiliation Program today and take the first step towards
          unlocking exciting opportunities and incentives!
        </p>
      </div>
      <div className='affrule--block'>
        <h1 className='affrule--next--title text-2xl'>What to do</h1>
        <ol className='affrule--next--list'>
          <li>
            <span className='affrule--next--step'>Step 1.</span> Click on the button below.
          </li>
          <li>
            <span className='affrule--next--step'>Step 2.</span> Fill in the form by providing us
            your channel URL and email address.
          </li>
          <li>
            <span className='affrule--next--step'>Step 3.</span> Check your registered email mailbox
            for the verification steps.
          </li>
          <li>
            <span className='affrule--next--step'>Step 4.</span> Get yourself verified as the email
            instructed.
          </li>
          <li>
            <span className='affrule--next--step'>Step 5.</span> Boom! You are good to start earning
            points. Easy. Right?
          </li>
          <li>
            <span className='affrule--next--step'>Step 6.</span> Put the affiliate link on your
            videos.
          </li>
          <li>
            <span className='affrule--next--step'>Step 7.</span> When your audiences click through
            the link and land on our page, you will get points.
          </li>
          <li>
            <span className='affrule--next--step'>Step 8.</span> Once you drive 100 sessions without
            bouncing, you will get 1 point.
          </li>
        </ol>
      </div>
      <div className='affrule--reg--button'>{affRuleButton}</div>
    </div>
  );
};

export default AffRule;
