import React, { useState, useEffect } from 'react';
import './TeamMember.css';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import AffReg from '../../Affiliation/AffReg';
import TeamMemberProps from './TeamMemberProps';

const TeamMember = ({ scrollTo, goToSectionRef }) => {
  const [playerId, setplayerId] = useState(0);

  const TeamMemberPropsMap = TeamMemberProps.map((data) => {
    if (data.key == playerId) {
      return (
        <div className='team--member--player--desc'>
          <h1 className='font-pressstart2p'>{data.name}</h1>
          <p>Favorite Part In This Project: {data.favPart}</p>
          <p>Favorite Game: {data.favGame}</p>
        </div>
      );
    }
  });

  const handlePlayerClick = (prev) => {
    setplayerId(prev);
  };

  return (
    <div className='section'>
      <div className='team--member--player font-pressstart2p'>
        <div className='team--member--player--select'>
          <h1 className='font-pressstart2p'>SELECT PLAYER</h1>
          <div>
            <div className='team--member--player--row'>
              <img
                src='/images/AboutUs/TeamMember_1.png'
                alt=''
                onClick={() => handlePlayerClick(1)}
              />
              <img
                src='/images/AboutUs/TeamMember_2.png'
                alt=''
                onClick={() => handlePlayerClick(2)}
              />
            </div>
            <div className='team--member--player--row'>
              <img
                src='/images/AboutUs/TeamMember_3.png'
                alt=''
                onClick={() => handlePlayerClick(3)}
              />
              <img
                src='/images/AboutUs/TeamMember_3.png'
                alt=''
                onClick={() => handlePlayerClick(4)}
              />
            </div>
          </div>
        </div>
        {TeamMemberPropsMap}
      </div>
      <button className='aboutus--downarrow' onClick={() => scrollTo(goToSectionRef)}>
        <KeyboardDoubleArrowDownIcon
          fontSize='large'
          sx={{
            color: '#ff00a0',
          }}
        />
      </button>
    </div>
  );
};

export default TeamMember;
