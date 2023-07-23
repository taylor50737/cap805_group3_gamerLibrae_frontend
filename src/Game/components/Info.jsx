import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import { Box, Typography, Button, Chip } from '@mui/material';
import Score from '../../shared/components/Score';

const Category = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: grey;
`;

const Information = styled.span`
  font-size: 20px;
`;

const Info = ({ game }) => {
  return (
    <Box
      style={{
        background: 'rgba(0, 0, 0, 0.5)',
        backgroundImage: `url(https://res.cloudinary.com/dpfvhna2t/image/upload/${game.banner})`,
        backgroundBlendMode: 'darken',
        backgroundSize: '100% 100%',
        height: '648px', // 16:9
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
        <Score score={game.score || 'NaN'} size={175} />
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
        <Typography sx={{ fontSize: '32px', fontWeight: 800 }}>{game.name}</Typography>
        <Category>Platform: </Category> <Information>{game.platforms.join(', ')}</Information>
        <br />
        <Category>Developer: </Category>
        <Information>{game.developer}</Information>
        <br />
        <Category>Release Date: </Category>
        <Information>
          {new Intl.DateTimeFormat('en-CA', {
            month: 'long',
            year: 'numeric',
            day: 'numeric',
          }).format(new Date(game.releaseDate))}
        </Information>
        <br />
        <Category>Genre: </Category>
        <Information>{game.genres.join(', ')}</Information>
        <br />
        <Category>Mode: </Category>
        <Information>{game.modes.join(', ')}</Information>
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
            alert(`${game.name} have been added to your wishlist`);
          }}
          sx={{ bgcolor: '#4e5154', color: 'white', '&:hover': { bgcolor: '#1a1919' } }}
        >
          Add to wishlist
        </Button>
        <Link to={`/game/${game._id}/review-edit`}>
          <Button sx={{ bgcolor: '#4e5154', color: 'white', '&:hover': { bgcolor: '#1a1919' } }}>
            Post review
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Info;
