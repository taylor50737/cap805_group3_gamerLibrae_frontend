import { Grid, Typography } from '@mui/material';
import { iso8601dateToString } from '../../shared/util/iso8601dateToString';

export const GameInfo = ({ game }) => {
  return (
    <Grid container spacing={{ xs: 2, sm: 4, md: 8 }} sx={{ py: 4 }}>
      <Grid item>
        <img
          src={`https://res.cloudinary.com/dpfvhna2t/image/upload/${game.portrait}`}
          className='h-[160px] w-[120px] rounded'
        />
      </Grid>
      <Grid item>
        <Typography
          sx={{
            fontSize: 24,
            fontWeight: 800,
            textWrap: 'balance',
          }}
        >
          {game.name}
        </Typography>
        <Typography
          sx={{
            fontSize: 18,
          }}
        >
          {game.platforms.join(', ')}
          <br />
          {`${iso8601dateToString(new Date(game.releaseDate))} ${game.developer}`}
          <br />
          {game.modes.join(', ')}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default GameInfo;
