import { Suspense } from 'react';
import { useLoaderData, Await } from 'react-router-dom';

import { Grid, Box } from '@mui/material';

import AdvanceGameSearchBox from '../../shared/components/AdvanceGameSearchBox';
import Carousel from './components/Carousel';
import TopGames from './components/TopGames';
import ErrorPage from '../../Error/pages/ErrorPage';

export const HomePage = () => {
  const { carouselPromise, topGamesPromise } = useLoaderData();

  return (
    <>
      <Grid container spacing={'15px'} sx={{ mt: '2px' }}>
        <Grid item xs={12} sm={12} md={3}>
          <Box sx={{ height: '482px' }}>
            <AdvanceGameSearchBox extraSx={{ justifyContent: 'space-between', height: '100%' }} />
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={9}>
          <Box
            sx={{
              aspectRatio: '16/9',
            }}
          >
            <Suspense fallback={<p>Loading</p>}>
              <Await resolve={carouselPromise} errorElement={<ErrorPage />}>
                {(games) => <Carousel games={games} />}
              </Await>
            </Suspense>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <Box
            sx={{
              height: { md: '250px', xs: '200px' },
            }}
          >
            <Suspense fallback={<p>Loading</p>}>
              <Await resolve={topGamesPromise} errorElement={<ErrorPage />}>
                {(games) => <TopGames games={games} />}
              </Await>
            </Suspense>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
