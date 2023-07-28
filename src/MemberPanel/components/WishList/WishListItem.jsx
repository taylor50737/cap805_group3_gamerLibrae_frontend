import { Link } from 'react-router-dom';
import { Grid, Typography, Box, Paper, Chip } from '@mui/material';

import Score from '../../../shared/components/Score';
import { iso8601dateToString } from '../../../shared/util/iso8601dateToString';

const WishListItem = ({ games }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
      {games.map((game, i) => (
        <Paper
          key={game._id}
          elevation={10}
          sx={{ bgcolor: '#212121', color: 'white', borderRadius: '14px' }}
        >
          <Grid container sx={{ m: 0, width: '100%', height: '100%' }}>
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
              <Box sx={{ ml: 2 }}>
                <Typography sx={{ fontSize: '24px', fontWeight: 800 }}>{game.name}</Typography>
                <Typography sx={{ fontSize: '16px' }}>
                  <span style={{ color: '#a7a8a7' }}>Platforms</span>: {game.platforms.join(`, `)}
                  <br />
                  <span style={{ color: '#a7a8a7' }}>Genres:</span> {game.genres.join(`, `)}
                  <br />
                  <span style={{ color: '#a7a8a7' }}>Release Date:</span>{' '}
                  {iso8601dateToString(game.releaseDate)}
                  <br />
                  <span style={{ color: '#a7a8a7' }}>Modes:</span> {game.modes.join(`, `)}
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
              <Score
                score={typeof game.score === 'number' ? Math.round(game.score) : 'NaN'}
                size={100}
              />
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Box>
  );
};

export default WishListItem;
