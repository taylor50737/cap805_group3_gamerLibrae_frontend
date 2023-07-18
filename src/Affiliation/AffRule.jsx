import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './AffRule.css';
import CustomButton from '../shared/components/FormElements/CustomButton';

import AuthContext from '../shared/context/AuthContext';
import useAuth from '../shared/hooks/useAuth';

// You have already registered for the Affiliation Program. Please check your email inbox for the instructions to start earning points. If you have never registered, please contact us via the [object Object]

const AffRule = () => {
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [navToAffReg, setNavToAffReg] = useState(false);
  // const [responseMsg, setResponseMsg] = useState(false);
  // const [accountInfo, setAccountInfo] = useState(userName);
  // const [loading, setLoading] = useState(true);

  const { loggedIn, affiliation } = useAuth();
  const [responseMsg, setResponseMsg] = useState(false);

  // console.log(accountInfo);

  // const affFetchAuthMe = async () => {
  //   const affCheckResponse = await fetch('http://localhost:8080/api/auth/users/me', {
  //     method: 'GET',
  //     credentials: 'include',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //   });

  //   let ac;
  //   if (affCheckResponse.status != 200) {
  //     ac = {
  //       loggedIn: false,
  //       userName: '',
  //       userId: '',
  //       admin: false,
  //       affiliation: false,
  //     };
  //   } else {
  //     ac = await affCheckResponse.json();
  //   }
  //   console.log(ac);
  //   const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  //   await delay(1500);
  //   setAccountInfo(ac);
  //   setLoading(false);
  //   return ac;
  // };

  // const affRuleChecker = async () => {
  //   let checkerResult;
  //   checkerResult = await affFetchAuthMe();
  //   if (checkerResult.loggedIn) {
  //     setLoggedIn(true);
  //     if (checkerResult.affiliation.affEmail) {
  //       setResponseMsg(true);
  //     }
  //   }
  // };

  useEffect(() => {
    if (loggedIn && affiliation.affEmail) {
      setResponseMsg(true);
    }
  }, [loggedIn, affiliation]);

  //         console.log(json);
  //         if (!json.loggedIn) {
  //           setLogedIn(false);
  //         } else {
  //           if (!json.affiliation.affEmail) {
  //             setNavToAffReg(true);
  //           } else {
  //             setResponseMsg(true);
  //           }
  //         }
  //       });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

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
