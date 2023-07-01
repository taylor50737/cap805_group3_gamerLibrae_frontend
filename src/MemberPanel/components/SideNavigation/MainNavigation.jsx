import { Avatar } from '@mui/material';

import NavLinks from './NavLinks';

const MainNavigation = (props) => {
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
            <div>{props.user[0].name}</div>
            <div>
              <a href='#'>[View my member profile URL]</a>
            </div>
          </div>
          <nav>
            <NavLinks />
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default MainNavigation;
