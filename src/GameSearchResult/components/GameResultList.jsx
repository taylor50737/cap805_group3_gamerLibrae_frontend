import { Link } from 'react-router-dom';
import { Grid, Typography, Box, Paper, Chip } from '@mui/material';

import Score from '../../shared/components/Score';
import { iso8601dateToString } from '../../shared/util/iso8601dateToString';

const GameResultList = ({ games }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
      {games.map((game, i) => (
        <Paper
          elevation={10}
          sx={{ bgcolor: '#212121', color: 'white', borderRadius: '14px' }}
          key={i}
        >
          <Grid container key={i} sx={{ m: 0, width: '100%', height: '100%' }}>
            {/* Cover image */}
            <Grid item md={3}>
              <Link to={`/game/${game._id}`}>
                <Paper
                  elevation={10}
                  sx={{
                    width: 160,
                    height: 200,
                    borderRadius: '14px',
                    backgroundImage: `url(https://res.cloudinary.com/dpfvhna2t/image/upload/${game.portrait})`,
                    backgroundSize: '100% 100%',
                  }}
                />
              </Link>
            </Grid>

            {/* Information */}
            <Grid item md={7}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  height: '100%',
                  ml: 2,
                }}
              >
                <article>
                  <Typography sx={{ fontSize: '20px', fontWeight: 800 }}>{game.name}</Typography>
                  <Typography sx={{ fontSize: '16px' }}>
                    Platform: {game.platforms.toString()}
                    <br />
                    Genre: {game.genres.toString()}
                    <br />
                    Release Date: {iso8601dateToString(game.releaseDate)}
                    <br />
                    Mode: {game.modes.toString()}
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
                </article>
              </Box>
            </Grid>

            {/* Score */}
            <Grid item md={2} sx={{ display: 'flex', alignItems: 'center' }}>
              <Score score={game.score ? Math.round(game.score) : 'NaN'} size={100} />
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Box>
  );
};

export default GameResultList;
