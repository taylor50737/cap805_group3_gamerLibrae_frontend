import { useState, useRef, useEffect } from 'react';

import { IconButton, Box, Typography } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight, faCircle } from '@fortawesome/free-solid-svg-icons';

const displayItems = [
  { title: 'The Legend of Zelda: Tears of the Kingdom', img: 'src/assets/carousel/zelda.jpg' },
  { title: 'Elden ring', img: 'src/assets/carousel/eldenRing.jpg' },
  { title: 'Diablo IV', img: 'src/assets/carousel/diablo4.jpg' },
];

const autoSwipeTimerMs = 3000;

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(handleSwipe(1), autoSwipeTimerMs);

    return () => clearTimeout(timer.current);
  });

  // Left swipe = handleSwipe(-1), Right wipe = handleSwipe(1)
  const handleSwipe = (indexChange) => () => {
    if (index >= displayItems.length - 1 && indexChange > 0) {
      setIndex(0);
    } else if (index <= 0 && indexChange < 0) {
      setIndex(displayItems.length - 1);
    } else {
      setIndex(index + indexChange);
    }
  };

  return (
    <Box sx={{ display: 'inline-block', position: 'relative', width: '100%', height: '100%'}}>

      {/* Title */}
      <Typography
        sx={{
          position: 'absolute',
          top: '80%',
          left: '5%',
          fontFamily: 'Chakra Petch',
          fontSize: '24px',
          fontWeight: 600,
        }}
      >
        {displayItems[index].title}
      </Typography>

      {/* Left swipe */}
      <IconButton
        sx={{
          position: 'absolute',
          top: '50%',
          left: '0%',
          transform: 'translate(0, -50%)',
        }}
        onClick={handleSwipe(-1)}
      >
        <FontAwesomeIcon icon={faAnglesLeft} style={{ color: '#b3b2af' }} />
      </IconButton>

      {/* Right swipe */}
      <IconButton
        sx={{
          position: 'absolute',
          top: '50%',
          right: '0%',
          transform: 'translate(0, -50%)',
        }}
        onClick={handleSwipe(1)}
      >
        <FontAwesomeIcon icon={faAnglesRight} style={{ color: '#b3b2af' }} />
      </IconButton>

      {/* Dot indicator */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: '90%',
          left: '50%',
          transform: 'translate(-50%, -10%)',
        }}
      >
        {displayItems.map((_, i) => (
          <IconButton
            key={i}
            style={{ color: index == i ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)' }}
            sx={{ fontSize: '10px' }}
            onClick={() => setIndex(i)}
          >
            <FontAwesomeIcon icon={faCircle} />
          </IconButton>
        ))}
      </Box>

      {/* image */}
      {/* <img
        src={displayItems[index].img}
        onClick={() => alert('Game page')}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
        }}
        className='z-0 after:absolute after:top-0 after:left-0 after:z-[1] after:bg-blue-300'
      /> */}

      <div
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.4)',
          backgroundImage: `url(${displayItems[index].img})`,
          backgroundBlendMode: 'darken',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '0% 0%',
          borderRadius: '18px',
        }}
      />
    </Box>
  );
};

export default Carousel;
