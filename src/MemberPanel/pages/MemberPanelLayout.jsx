import MainNavigation from '../components/SideNavigation/MainNavigation';
import CustomBreadcrumbs from '../components/SideNavigation/CustomBreadcrumbs';
import { Outlet } from 'react-router-dom';

const MemberPanelLayout = () => {
  return (
    <div className='overflow-hidden rounded-xl'>
      <CustomBreadcrumbs />
      <div className='md:flex'>
        <div className='md:shrink-0 md:pb-5'>
          <MainNavigation />
        </div>
        <div className='py-5 md:py-0 md:pl-5 lg:py-0 lg:pl-5'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MemberPanelLayout;
