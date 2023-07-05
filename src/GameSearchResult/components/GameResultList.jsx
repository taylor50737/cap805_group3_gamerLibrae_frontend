import { Link } from 'react-router-dom';
import { Grid, Typography, Box, Paper, Chip } from '@mui/material';

import Score from '../../shared/components/Score';

const GameResultList = ({ games }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {games.map((game, i) => (
        <Paper elevation={10} sx={{ bgcolor: '#212121', color: 'white', borderRadius: '14px' }}>
          <Grid container key={i} sx={{ m: 0, width: '100%', height: '100%' }}>
            {/* Cover image */}
            <Grid item md={3}>
              <Link to={`/game/${game.id}`}>
                <Paper
                  elevation={10}
                  sx={{
                    width: 160,
                    height: 200,
                    borderRadius: '14px',
                    backgroundImage: `url(${game.imgSrc})`,
                    backgroundSize: '100% 100%',
                  }}
                />
              </Link>
            </Grid>

            {/* Information */}
            <Grid item md={7}>
              <Box sx={{ ml: 2 }}>
                <Typography sx={{ fontSize: '24px', fontWeight: 800 }}>{game.title}</Typography>
                <Typography sx={{ fontSize: '16px' }}>
                  Platform: {game.platform}
                  <br />
                  Genre: {game.genre}
                  <br />
                  Release Date: {game.releaseDate}
                  <br />
                  Mode: {game.mode}
                </Typography>
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
              </Box>
            </Grid>

            {/* Score */}
            <Grid item md={2} sx={{ display: 'flex', alignItems: 'center' }}>
              <Score score={game.score} size={100} />
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Box>
  );
};

export default GameResultList;
