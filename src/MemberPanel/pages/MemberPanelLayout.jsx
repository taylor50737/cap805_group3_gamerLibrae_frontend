import { Outlet, useParams } from 'react-router-dom';

import MainNavigation from '../components/SideNavigation/MainNavigation';
import CustomBreadcrumbs from '../components/SideNavigation/CustomBreadcrumbs';

const DUMMY_USERS = [
  {
    uid: 'u1',
    name: 'bdearden0',
    avatar: 'https://robohash.org/etimpeditcorporis.png?size=50x50&set=set1',
  },
  {
    uid: 'u2',
    name: 'mwinsom3',
    avatar: 'https://robohash.org/nisiiustoomnis.png?size=50x50&set=set1',
  },
  {
    uid: 'u3',
    name: 'gesel4',
    avatar: 'https://robohash.org/voluptateautquis.png?size=50x50&set=set1',
  },
];

const MemberPanelLayout = () => {
  const userId = useParams().uid;
  const loadedUser = DUMMY_USERS.filter((user) => user.uid === userId);
  return (
    <div className='overflow-hidden rounded-xl'>
      {/* <CustomBreadcrumbs uid={userId} /> */}
      <div className='pt-5 md:flex'>
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
