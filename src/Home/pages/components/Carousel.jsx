import { useState, useRef, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { IconButton, Box, Typography } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight, faCircle } from '@fortawesome/free-solid-svg-icons';

const autoSwipeTimerMs = 5000;

const Carousel = ({ games }) => {
  const [index, setIndex] = useState(0);
  const timer = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(handleSwipe(1), autoSwipeTimerMs);

    return () => clearTimeout(timer.current);
  });

  // Left swipe = handleSwipe(-1), Right wipe = handleSwipe(1)
  const handleSwipe = (indexChange) => () => {
    if (index >= games.length - 1 && indexChange > 0) {
      setIndex(0);
    } else if (index <= 0 && indexChange < 0) {
      setIndex(games.length - 1);
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
        {games[index].name}
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
        {games.map((_, i) => (
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
      <Box
        sx={{
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.4)',
          backgroundImage: `url(https://res.cloudinary.com/dpfvhna2t/image/upload/${games[index].banner})`,
          backgroundBlendMode: 'darken',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '0% 0%',
          borderRadius: '18px',
          transitionDelay: '100ms',
          transitionProperty: 'background',
          transitionDuration: '500ms',
          cursor: 'pointer',
        }}
        onClick={() => {
          navigate(`game/${games[index]._id}`);
        }}
      />
    </Box>
  );
};

export default Carousel;
