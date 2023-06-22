import { Link } from 'react-router-dom';

import { Grid, Box } from '@mui/material';

import AdvanceGameSearchBox from '../../Components/AdvanceGameSearchBox';

export const HomePage = () => {
  return (
    <>
      {/* <h1 className='text-3xl font-bold underline'>
        <i className='fa-solid fa-hand' /> Hi 852_code_9
      </h1>
      <div>
        <button>
          <i className='fa fa-pen' /> Write a Review
        </button>
      </div>
      <div>
        <button>
          <i className='fa fa-send' /> Send us a message
        </button>
      </div>
      <div>
        <button>
          <i className='fa fa-user' /> Login
        </button>
      </div> */}

      <Grid container spacing={'15px'}>
        <Grid item xs={12} sm={12} md={3}>
          <Box
            sx={{
              bgcolor: 'grey',
              height: { md: '500px', xs: '250px' },
            }}
          >
            <AdvanceGameSearchBox/>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={9}>
          <Box
            sx={{
              bgcolor: 'grey',
              height: { md: '100%', xs: '250px' },
            }}
          >
            Featured game
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Box
            sx={{
              bgcolor: 'grey',
              height: { md: '250px', xs: '200px' },
            }}
          >
            Top game
          </Box>
        </Grid>
      </Grid>

      {/* Quick test for router */}
      <Link to={'dwqdqdqw'}>dwqdqdqw</Link>
      <br />
      <Link to={'game/123'}>game/123</Link>
      <br />
      <Link to={'game/123/reviewEdit'}>game/123/reviewEdit</Link>
      <br />
      <Link to={'adminPanel'}>adminPanel</Link>
    </>
  );
};

export default HomePage;
