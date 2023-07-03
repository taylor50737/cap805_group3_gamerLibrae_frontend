import './BrandnameSec.css';
import { useEffect, useRef } from 'react';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Color from '@tiptap/extension-color';

function BrandnameSec({ scrollTo, goToSectionRef }) {
  return (
    <div className='section'>
      <div className='copy'>
        <h1 className='aboutus--brandname font-orbitron'>GAMER LIBRAE</h1>
        <button className='aboutus--downarrow' onClick={() => scrollTo(goToSectionRef)}>
          <KeyboardDoubleArrowDownIcon
            fontSize='large'
            sx={{
              color: '#ff00a0',
            }}
          />
        </button>
      </div>
    </div>
  );
}

export default BrandnameSec;
