import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Grid, Box } from '@mui/material';

import SortSelector from '../../GameSearchResult/components/SortSelector';
import WishListItem from '../components/WishList/WishListItem';
import { useHttpClient } from '../../shared/hooks/http-hook';

const WishList = () => {
  const [loadedWishList, SetLoadedWishList] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const userId = useParams().uid;

  useEffect(() => {
    const fetchWishList = async () => {
      try {
        const responseData = await sendRequest(
          `${import.meta.env.VITE_API_PATH}/api/users/wishlist/${userId}`,
        );
        SetLoadedWishList(responseData.wishList);
      } catch (err) {}
    };
    fetchWishList();
  }, [sendRequest, userId]);

  // const handleSortBy = (newGames) => {
  //   setGames(newGames);
  // };
  return (
    <div className='rounded-lg bg-gray-700'>
      {!isLoading && loadedWishList && (
        <Grid container sx={{ mt: 0, mb: 2 }} spacing={'15px'}>
          {/* <Grid item md={12}>
          <Box sx={{ mx: 4, float: 'right', display: 'table' }}>
            <SortSelector games={1} handleSortBy={handleSortBy} />
          </Box>
        </Grid> */}

          <Grid item md={12}>
            <Box sx={{ mx: 4, mb: 4 }}>
              {loadedWishList.length === 0 && (
                <div className='mx-40 my-72 flex flex-col items-center justify-center text-5xl'>
                  <div>The Wishlist is empty</div>
                </div>
              )}
              <WishListItem games={loadedWishList} />
            </Box>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default WishList;
