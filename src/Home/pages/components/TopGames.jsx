import { useNavigate } from 'react-router-dom';
import { Box, Typography, Paper } from '@mui/material';

import { Score } from '/src/Components/Score';

const topGamesItems = [
  { title: 'Street Fighter 6', score: 94, imgSrc: '/images/topGames/streetFighter6.jpg' },
  { title: 'Resident Evil 4', score: 93, imgSrc: '/images/topGames/residentEvil4.jpg' },
  { title: 'Dead Space', score: 92, imgSrc: '/images/topGames/deadSpace.jpg' },
  { title: 'Hi-Fi RUSH', score: 90, imgSrc: '/images/topGames/hifiRush.jpg' },
  { title: 'Persona 4 Golden', score: 89, imgSrc: '/images/topGames/p4g.jpg' },
  {
    title: 'Dead Cells: Return to Castlevania',
    score: 88,
    imgSrc: '/images/topGames/deadCell.jpg',
  },
];

const TopGames = () => {
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
        {topGamesItems.map((game, i) => (
          <Paper
            key={i}
            elevation={10}
            onClick={() => navigate('/game/123')}
            sx={{
              position: 'relative',
              width: 160,
              height: 200,
              bgcolor: '#b7b7b7',
              backgroundImage: `url(${game.imgSrc})`,
              backgroundSize: '100% 100%',
              '&:hover': {
                opacity: [0.9, 0.8, 0.7],
                cursor: 'pointer',
              },
            }}
          >
            <Box sx={{ position: 'absolute', top: '75%', left: '70%' }}>
              <Score score={game.score} size={50} />
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default TopGames;
