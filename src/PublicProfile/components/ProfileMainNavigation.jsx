import { Avatar } from '@mui/material';

import NavLinks from './NavLinks';

const ProfileMainNavigation = (props) => {
  return (
    <div>
      <aside className='sm:w-full lg:w-64'>
        <div className='h-full overflow-y-auto rounded-lg bg-gray-700 px-3 py-4'>
          <div className='flex flex-col items-center pb-4'>
            <Avatar
              alt={props.user[0].name}
              src={props.user[0].avatar}
              sx={{ width: 150, height: 150 }}
            />
            <div className='pt-4'>Username: {props.user[0].name}</div>
            <div>Tier: {props.user[0].uid === 'u1' ? 'Admin' : 'Regular User'}</div>
          </div>
          <nav>
            <NavLinks />
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default ProfileMainNavigation;