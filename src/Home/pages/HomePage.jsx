import { Link } from 'react-router-dom';

import { Grid, Box } from '@mui/material';

import AdvanceGameSearchBox from '../../Components/AdvanceGameSearchBox';
import Carousel from './components/Carousel'
import ImageSlider from './components/ImageSlider';

const displayItems = [
  { title: 'The Legend of Zelda: Tears of the Kingdom', img: 'src/assets/carousel/zelda.jpg' },
  { title: 'Elden ring', img: 'src/assets/carousel/eldenRing.jpg' },
  { title: 'Diablo IV', img: 'src/assets/carousel/diablo4.jpg' },
];

export const HomePage = () => {
  return (
    <>
      <Grid container spacing={'15px'} sx={{mt: '2px'}}>
        <Grid item xs={12} sm={12} md={3.5}>
          <Box
            sx={{
              bgcolor: 'grey',
              height: { md: '500px', xs: '250px' },
            }}
          >
            <AdvanceGameSearchBox/>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={8.5}>
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
