import MainNavigation from '../components/SideNavigation/MainNavigation';
import { Outlet } from 'react-router-dom';

const MemberPanelLayout = () => {
  return (
    <div className='overflow-hidden rounded-xl'>
      <div className='md:flex'>
        <div className='md:shrink-0'>
          <MainNavigation />
        </div>
        <div className='py-1 md:pl-5 lg:pl-5'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MemberPanelLayout;
