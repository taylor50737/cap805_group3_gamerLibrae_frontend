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
      {/* <button
        onClick={async () => {
          let data = await fetch('http://localhost:8080/api/session', {
            method: 'POST',
            credentials: 'include',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',

            },
            body: JSON.stringify({ email: 'abc@abc.com', password: 'abc' }),
          });
          console.log(data);
        }}
      >
        login
      </button>
      <br/>
      <button
        onClick={async () => {
          let data = await fetch('http://localhost:8080/api/session', {
            method: 'DELETE',
            credentials: 'include',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          });
          console.log(data);
        }}
      >
        logout
      </button>
      <br/>
      <button
        onClick={async () => {
          let response = await fetch('http://localhost:8080/api/users/me', {
            method: 'GET',
            credentials: 'include',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          });
          console.log(response);
          const data = await response.json();
          console.log(data);
        }}
      >
        auth me
      </button> */}
    </>
  );
};

export default HomePage;
