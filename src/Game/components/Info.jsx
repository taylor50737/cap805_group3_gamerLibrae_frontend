import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

import { Box, Typography, Button, Chip } from '@mui/material';
import Score from '../../shared/components/Score';

const game = {
  id: 3,
  title: 'The Legend of Zelda: Tears of the Kingdom',
  platform: 'Switch',
  developer: 'Nintendo Entertainment Planning & Development',
  releaseDate: 'May 12, 2023',
  genre: 'Open world',
  mode: 'Single-Player',
  tags: ['Adventure', 'Zelda', 'Open World', 'Touching'],
  score: 98,
  imgSrc: '/images/carousel/zelda.jpg',
};

const Category = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: grey;
`;

const Information = styled.span`
  font-size: 20px;
`;

const Info = () => {
  return (
    <Box
      style={{
        background: 'rgba(0, 0, 0, 0.75)',
        backgroundImage: `url("../${game.imgSrc}")`,
        backgroundBlendMode: 'darken',
        backgroundSize: '100% 100%',
        borderRadius: '18px',
        height: '600px',
        position: 'relative',
      }}
    >
      {/* Game Score */}
      <Box
        sx={{
          position: 'absolute',
          top: '0%',
          right: '0%',
        }}
      >
        <Score score={game.score} size={175} />
      </Box>

      {/* Game Information*/}
      <Box
        sx={{
          bgcolor: 'rgba(0, 0, 0, 0.65)',
          position: 'absolute',
          top: '60%',
          left: '50%',
          transform: 'translate(-50%, -60%)',
          p: 4,
          pl: 20,
          width: '100%',
          borderRadius: '8px',
        }}
      >
        <Typography sx={{ fontSize: '32px', fontWeight: 800 }}>{game.title}</Typography>
        <Category>Platform: </Category> <Information>{game.platform}</Information>
        <br />
        <Category>Developer: </Category>
        <Information>{game.developer}</Information>
        <br />
        <Category>Release Date: </Category>
        <Information>{game.releaseDate}</Information>
        <br />
        <Category>Genre: </Category>
        <Information>{game.genre}</Information>
        <br />
        <Category>Mode: </Category>
        <Information>{game.mode}</Information>
        <br />
        <Category>Tags: </Category>
        {game.tags.map((tag, i) => (
          <Chip
            key={i}
            variant='outlined'
            label={tag}
            sx={{
              mr: '4px',
              border: 'none',
              bgcolor: '#9747ff',
              color: '#ffffff',
              '.MuiChip-label': { fontSize: '12px', px: '8px' },
              '.MuiChip-deleteIcon': { fontSize: '15px' },
            }}
          />
        ))}
        <br />
      </Box>

      {/* Action buttons */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          position: 'absolute',
          top: '95%',
          left: '95%',
          transform: 'translate(-95%, -95%)',
          width: '30%',
        }}
      >
        <Button
          onClick={() => {
            alert(`${game.title} have been added to your wishlist`);
          }}
          sx={{ bgcolor: '#4e5154', color: 'white', '&:hover': { bgcolor: '#1a1919' } }}
        >
          Add to wishlist
        </Button>
        <NavLink to='/game/g1/review-edit'>
          <Button sx={{ bgcolor: '#4e5154', color: 'white', '&:hover': { bgcolor: '#1a1919' } }}>
            Post review
          </Button>
        </NavLink>
      </Box>
    </Box>
  );
};

export default Info;
