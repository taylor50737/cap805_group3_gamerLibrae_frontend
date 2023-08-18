import './WhoWeAre.css';
import { useEffect, useRef } from 'react';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

function WhoAreWe({ scrollTo, goToSectionRef }) {
  return (
    <div className='section font-dmsans'>
      <div className='copy'>
        <h1 className='aboutus--whoweare'>Who We Are</h1>
        <div className='aboutus--whoweare--para'>
          <p>
            <cite>
              "I don't care what they tell you in school, Gamer Librae is the best game review site
              in the world."
            </cite>
          </p>
          <p>
            Gamer Librae is developed by Team 852_Code9 in 2023. We are a passionate team of
            dedicated gamers who believe in providing the most unbiased and genuine reviews out
            there. Every review you find on our platform comes straight from real gamers who have
            immersed themselves in the world of gaming. Gamer Librae is about the collective voice
            of gamers sharing their experiences to enrich your gaming journey. Enjoy yourself in the
            ultimate destination for authentic game reviews.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhoAreWe;
