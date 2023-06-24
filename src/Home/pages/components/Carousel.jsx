import { useState, useRef, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { IconButton, Box, Typography } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight, faCircle } from '@fortawesome/free-solid-svg-icons';

const displayItems = [
  {
    title: 'The Legend of Zelda: Tears of the Kingdom',
    imgUrl: 'src/assets/carousel/zelda.jpg',
    pageUrl: 'game/123',
  },
  { title: 'Elden ring', imgUrl: 'src/assets/carousel/eldenRing.jpg', pageUrl: 'game/123' },
  { title: 'Diablo IV', imgUrl: 'src/assets/carousel/diablo4.jpg', pageUrl: 'game/123' },
  { title: 'Final Fantasy XVI', imgUrl: 'src/assets/carousel/ff16.jpg', pageUrl: 'game/123' },
  { title: 'Starfield', imgUrl: 'src/assets/carousel/starfield.jpg', pageUrl: 'game/123' },
];

const autoSwipeTimerMs = 5000;

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
    <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* Title */}
      <Typography
        sx={{
          position: 'absolute',
          top: '80%',
          left: '5%',
          fontFamily: 'Chakra Petch',
          fontSize: '36px',
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
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.4)',
          backgroundImage: `url(${displayItems[index].imgUrl})`,
          backgroundBlendMode: 'darken',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '0% 0%',
          borderRadius: '18px',
          transitionDuration: '500ms',
        }}
      >
        <Link to={displayItems[index].pageUrl} />
      </div>
    </Box>
  );
};

export default Carousel;
