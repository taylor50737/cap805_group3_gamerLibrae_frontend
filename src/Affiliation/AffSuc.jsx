import React, { useState, useContext, useEffect } from 'react';
import { AffContext } from '../shared/context/AffContext';
import './AffSuc.css';
import AffSucContentController1 from './components/AffSucContentController1';
import AffSucContentController2 from './components/AffSucContentController2';

const AffSuc = () => {
  const { affFormPosted, loading, affState, setAffState } = useContext(AffContext);
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
    setAffState(3);
  }, [affFormPosted, setAffState]);

  // Show loading indicator or placeholder content while waiting for the data to be fetched
  let affSucContent;
  if (loading || !isDataFetched) {
    affSucContent = <></>;
  } else {
    if (affFormPosted.affContextController.affEmail) {
      affSucContent = <AffSucContentController1 />;
    } else {
      affSucContent = <AffSucContentController2 />;
    }
  }

  return <div className='affsuc font-dmsans'>{affSucContent}</div>;
};

export default AffSuc;
