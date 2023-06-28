import MainNavigation from '../components/SideNavigation/MainNavigation';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

const MemberPanelLayout = () => {
  return (
    <div className='overflow-hidden rounded-xl'>
      <div className='md:flex'>
        <div className='md:shrink-0'>
          <MainNavigation />
        </div>
        <Container>
          <Outlet />
        </Container>
      </div>
    </div>
  );
};

export default MemberPanelLayout;
