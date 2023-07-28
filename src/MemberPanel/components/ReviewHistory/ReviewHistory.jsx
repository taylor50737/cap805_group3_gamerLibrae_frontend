import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHttpClient } from '../../../shared/hooks/http-hook';

import ReviewList from './ReviewList';

const ReviewHistory = () => {
  const [loadedReviews, setLoadedReviews] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const userId = useParams().uid;

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const responseData = await sendRequest(
          `${import.meta.env.VITE_API_PATH}/api/reviews/user/${userId}`,
        );
        setLoadedReviews(responseData.reviews);
      } catch (err) {}
    };
    fetchReviews();
  }, [sendRequest, userId]);

  return (
    <div className='rounded-lg bg-gray-700'>
      <div className='flex flex-col items-center px-5 pt-5'>
        <h2 className='pb-2 text-3xl'>Reviews History</h2>
        <div className='mt-2'>
          {!isLoading && loadedReviews && <ReviewList items={loadedReviews} />}
        </div>
      </div>
    </div>
  );
};

export default ReviewHistory;
