import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Grid, Box } from '@mui/material';

import SortSelector from '../../GameSearchResult/components/SortSelector';
import WishListItem from '../components/WishList/WishListItem';

const DUMMY_WISHLIST = [
  {
    gid: 1,
    title: 'Street Fighter 6',
    platform: 'PS5',
    releaseDate: 'June 2, 2023',
    genre: 'Fighting',
    mode: 'Multi-Player',
    tags: ['Adventure', 'Fight', 'Funny'],
    score: 94,
    imgSrc: '/src/assets/topGames/streetFighter6.jpg',
    uid: 'u1',
  },
  {
    gid: 2,
    title: 'Resident Evil 4',
    platform: 'PC',
    releaseDate: 'March 24, 2023',
    genre: 'Fighting',
    mode: 'Single-Player',
    tags: ['Adventure', 'Fight', 'Funny'],
    score: 93,
    imgSrc: '/src/assets/topGames/residentEvil4.jpg',
    uid: 'u1',
  },
  {
    gid: 3,
    title: 'Dead Space',
    platform: 'Xbox Series X',
    releaseDate: 'January 27, 2023',
    genre: 'Fighting',
    mode: 'Single-Player',
    tags: ['Adventure', 'Fight', 'Funny'],
    score: 92,
    imgSrc: '/src/assets/topGames/deadSpace.jpg',
    uid: 'u1',
  },
  {
    gid: 4,
    title: 'Hi-Fi RUSH',
    platform: 'PC',
    releaseDate: 'January 25, 2023',
    genre: 'Fighting',
    mode: 'Single-Player',
    tags: ['Adventure', 'Fight', 'Funny'],
    score: 90,
    imgSrc: '/src/assets/topGames/hifiRush.jpg',
    uid: 'u2',
  },
  {
    gid: 5,
    title: 'Persona 4 Golden',
    platform: 'Switch',
    releaseDate: 'Jan 19, 2023',
    genre: 'Fighting',
    mode: 'Single-Player',
    tags: ['Adventure', 'Fight', 'Funny'],
    score: 89,
    imgSrc: '/src/assets/topGames/p4g.jpg',
    uid: 'u2',
  },
  {
    gid: 6,
    title: 'Dead Cells: Return to Castlevania',
    platform: 'PC',
    releaseDate: 'March 6, 2023',
    genre: 'Fighting',
    mode: 'Single-Player',
    tags: ['Adventure', 'Fight', 'Funny'],
    score: 88,
    imgSrc: '/src/assets/topGames/deadCell.jpg',
    uid: 'u2',
  },
];

const WishList = () => {
  const userId = useParams().uid;
  const loadedWishList = DUMMY_WISHLIST.filter((wishlist) => wishlist.uid === userId);
  const [games, setGames] = useState(loadedWishList);
  const handleSortBy = (newGames) => {
    setGames(newGames);
  };
  return (
    <div className='rounded-lg bg-gray-700'>
      <Grid container sx={{ mt: 0, mb: 2 }} spacing={'15px'}>
        <Grid item md={12}>
          <Box sx={{ mx: 4, float: 'right', display: 'table' }}>
            <SortSelector games={games} handleSortBy={handleSortBy} />
          </Box>
        </Grid>

        <Grid item md={12}>
          <Box sx={{ mx: 4, mb: 4 }}>
            <WishListItem games={games} />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default WishList;
