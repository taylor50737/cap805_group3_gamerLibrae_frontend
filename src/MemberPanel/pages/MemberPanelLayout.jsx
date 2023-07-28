import { useState, useEffect } from 'react';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import { useHttpClient } from '../../shared/hooks/http-hook';
import useAuth from '../../shared/hooks/useAuth';

import MainNavigation from '../components/SideNavigation/MainNavigation';

const MemberPanelLayout = () => {
  const navigate = useNavigate();
  const [loadedUser, setLoadedUser] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const { userId } = useAuth();
  const memberId = useParams().uid;

  useEffect(() => {
    const checkIsUser = () => {
      if (userId !== memberId) {
        navigate(`/member/${userId}`);
      }
    };
    const fetchUser = async () => {
      try {
        const responseData = await sendRequest(
          `${import.meta.env.VITE_API_PATH}/api/users/${memberId}`,
        );
        setLoadedUser(responseData.user);
      } catch (err) {}
    };
    checkIsUser();
    fetchUser();
  }, [sendRequest, memberId]);

  return (
    <div className='overflow-hidden rounded-xl'>
      {/* <CustomBreadcrumbs uid={memberId} /> */}
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
