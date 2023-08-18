import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHttpClient } from '../../../shared/hooks/http-hook';

import CommentList from './CommentList';

const CommentHistory = () => {
  const [loadedComments, setLoadedComments] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const userId = useParams().uid;

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const responseData = await sendRequest(
          `${import.meta.env.VITE_API_PATH}/api/comments/user/${userId}`,
        );
        const sortedComments = responseData.comments.sort(
          (a, b) => new Date(b.postingDate) - new Date(a.postingDate),
        );
        setLoadedComments(sortedComments);
      } catch (err) {}
    };
    fetchComments();
  }, [sendRequest, userId]);

  return (
    <div className='rounded-lg bg-gray-700'>
      <div className='flex flex-col items-center px-5 pt-5'>
        <h2 className='pb-2 text-3xl'>Comments History</h2>
        <div className='mt-2'>
          {!isLoading && loadedComments && <CommentList items={loadedComments} />}
        </div>
      </div>
    </div>
  );
};

export default CommentHistory;
