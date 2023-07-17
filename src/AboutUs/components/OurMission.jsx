import './OurMission.css';
import { useEffect, useRef } from 'react';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

function OurMission({ scrollTo, goToSectionRef }) {
  return (
    <div className='section font-dmsans'>
      <div className='copy'>
        <h1 className='aboutus--ourvision'>Our Mission</h1>
        <div className='aboutus--ourvision--para'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurMission;
