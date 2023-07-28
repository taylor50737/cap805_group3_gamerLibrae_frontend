import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { useHttpClient } from '../../shared/hooks/http-hook';

import MainNavigation from '../components/SideNavigation/MainNavigation';

const MemberPanelLayout = () => {
  const [loadedUser, setLoadedUser] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const userId = useParams().uid;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const responseData = await sendRequest(
          `${import.meta.env.VITE_API_PATH}/api/users/${userId}`,
        );
        setLoadedUser(responseData.user);
      } catch (err) {}
    };
    fetchUser();
  }, [sendRequest, userId]);
  return (
    <div className='overflow-hidden rounded-xl'>
      {/* <CustomBreadcrumbs uid={userId} /> */}
      <div className='pt-5 md:flex'>
        {!isLoading && loadedUser && (
          <>
            <div className='md:shrink-0 md:pb-5'>
              <MainNavigation user={loadedUser} />
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

export default MemberPanelLayout;
