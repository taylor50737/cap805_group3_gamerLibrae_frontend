import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { useHttpClient } from '../../shared/hooks/http-hook';
import useAuth from '../../shared/hooks/useAuth';

import ProfileMainNavigation from '../components/ProfileMainNavigation';

const PublicProfileLayout = () => {
  const [loadedUser, setLoadedUser] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const memberId = useParams().uid;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const responseData = await sendRequest(
          `${import.meta.env.VITE_API_PATH}/api/users/${memberId}`,
        );
        setLoadedUser(responseData.user);
      } catch (err) {}
    };
    fetchUser();
  }, [sendRequest, memberId]);

  return (
    <div className='overflow-hidden rounded-xl'>
      {/* <CustomBreadcrumbs uid={userId} /> */}
      <div className='pt-5 md:flex'>
        {!isLoading && loadedUser && (
          <>
            <div className='md:shrink-0 md:pb-5'>
              <ProfileMainNavigation user={loadedUser} />
            </div>
            <div className='py-5 md:py-0 md:pl-5 lg:py-0 lg:pl-5'>
              <Outlet />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PublicProfileLayout;
