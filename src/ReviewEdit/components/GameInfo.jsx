import { Grid, Typography } from '@mui/material';

export const GameInfo = () => {
  return (
    <Grid container spacing={{ xs: 2, sm: 4, md: 8 }} sx={{ py: 4 }}>
      <Grid item>
        <img src='/images/carousel/zelda.jpg' className='h-[120px] w-[120px] rounded' />
      </Grid>
      <Grid item>
        <Typography
          sx={{
            fontSize: 24,
            fontWeight: 800,
            textWrap: 'balance',
          }}
        >
          The Legend of Zelda: Tears of the Kingdom
        </Typography>
        <Typography
          sx={{
            fontSize: 18,
          }}
        >
          2023 Switch
          <br />
          Nintendo EPD
          <br />
          Single Player
        </Typography>
      </Grid>
    </Grid>
  );
};

export default GameInfo;
