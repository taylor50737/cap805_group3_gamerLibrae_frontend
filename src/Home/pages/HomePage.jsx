import { Link } from 'react-router-dom';

import { Grid, Box } from '@mui/material';

import AdvanceGameSearchBox from '../../shared/components/AdvanceGameSearchBox';
import Carousel from './components/Carousel';
import TopGames from './components/TopGames';

export const HomePage = () => {
  return (
    <>
      <Grid container spacing={'15px'} sx={{ mt: '2px' }}>
        <Grid item xs={12} sm={12} md={3}>
          <Box
            sx={{
              height: { md: '500px', xs: '250px' },
            }}
          >
            <AdvanceGameSearchBox extraSx={{ justifyContent: 'space-between', height: '100%' }} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={9}>
          <Box
            sx={{
              height: { md: '100%', xs: '250px' },
            }}
          >
            <Carousel />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Box
            sx={{
              height: { md: '250px', xs: '200px' },
            }}
          >
            <TopGames />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
