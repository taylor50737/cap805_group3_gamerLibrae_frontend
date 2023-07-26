import { useNavigate } from 'react-router-dom';
import { Box, Typography, Paper } from '@mui/material';

import Score from '../../../shared/components/Score';

const TopGames = ({ games }) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ position: 'relative', height: '100%', mt: '4px' }}>
      <Typography
        sx={{
          position: 'absolute',
          top: '-5%',
          left: '0%',
          fontFamily: 'Chakra Petch',
          fontSize: '24px',
          fontWeight: 600,
        }}
      >
        Top Games
      </Typography>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
          padding: '5px',
          mx: '0px',
        }}
      >
        {games.map((game, i) => (
          <Paper
            key={i}
            elevation={10}
            onClick={() => navigate(`/game/${game._id}`)}
            sx={{
              position: 'relative',
              width: '150px',
              aspectRatio: '3/4',
              bgcolor: '#b7b7b7',
              backgroundImage: `url(https://res.cloudinary.com/dpfvhna2t/image/upload/${game.portrait})`,
              backgroundSize: '100% 100%',
              '&:hover': {
                opacity: [0.9, 0.8, 0.7],
                cursor: 'pointer',
              },
            }}
          >
            <Box sx={{ position: 'absolute', top: '75%', left: '70%' }}>
              <Score
                score={typeof game.score === 'number' ? Math.round(game.score) : 'NaN'}
                size={50}
              />
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default TopGames;
