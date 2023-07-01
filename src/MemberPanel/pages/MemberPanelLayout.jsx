import { Outlet, useParams } from 'react-router-dom';

import MainNavigation from '../components/SideNavigation/MainNavigation';
import CustomBreadcrumbs from '../components/SideNavigation/CustomBreadcrumbs';

const DUMMY_USERS = [
  {
    uid: 'u1',
    name: 'Remy Sharp',
    avatar: 'https://i.etsystatic.com/25924315/r/il/b87247/4826173692/il_794xN.4826173692_e7xp.jpg',
  },
  {
    uid: 'u2',
    name: 'Kuri Fung',
    avatar:
      'https://www.rd.com/wp-content/uploads/2019/09/Cute-cat-lying-on-his-back-on-the-carpet.-Breed-British-mackerel-with-yellow-eyes-and-a-bushy-mustache.-Close-up-e1573490045672.jpg',
  },
];

const MemberPanelLayout = () => {
  const userId = useParams().uid;
  const loadedUser = DUMMY_USERS.filter((user) => user.uid === userId);
  return (
    <div className='overflow-hidden rounded-xl'>
      <CustomBreadcrumbs uid={userId} />
      <div className='md:flex'>
        <div className='md:shrink-0 md:pb-5'>
          <MainNavigation user={loadedUser} />
        </div>
        <div className='py-5 md:py-0 md:pl-5 lg:py-0 lg:pl-5'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MemberPanelLayout;
