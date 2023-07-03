import { Box, Typography, Paper } from '@mui/material';

import { Score } from '/src/Components/Score';

const topGamesItems = [
  { title: 'Street Fighter 6', score: 94, imgSrc: 'src/assets/topGames/streetFighter6.jpg' },
  { title: 'Resident Evil 4', score: 93, imgSrc: 'src/assets/topGames/residentEvil4.jpg' },
  { title: 'Dead Space', score: 92, imgSrc: 'src/assets/topGames/deadSpace.jpg' },
  { title: 'Hi-Fi RUSH', score: 90, imgSrc: 'src/assets/topGames/hifiRush.jpg' },
  { title: 'Persona 4 Golden', score: 89, imgSrc: 'src/assets/topGames/p4g.jpg' },
  {
    title: 'Dead Cells: Return to Castlevania',
    score: 88,
    imgSrc: 'src/assets/topGames/deadCell.jpg',
  },
];

const TopGames = () => {
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
            onClick={() => alert(game.title)}
            sx={{
              position: 'relative',
              width: 160,
              height: 200,
              bgcolor: '#b7b7b7',
              backgroundImage: `url(${game.imgSrc})`,
              backgroundSize: '100% 100%',
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
