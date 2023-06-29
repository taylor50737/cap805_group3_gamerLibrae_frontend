import { Avatar } from '@mui/material';

import CustomBreadcrumbs from './CustomBreadcrumbs';
import NavLinks from './NavLinks';

const MainNavigation = () => {
  return (
    <div>
      <CustomBreadcrumbs />
      <aside className='sm:w-full lg:w-64'>
        <div className='h-full overflow-y-auto rounded-lg bg-gray-700 px-3 py-4'>
          <div className='flex flex-col items-center pb-4'>
            <Avatar
              alt={'Username'}
              src={
                'https://i.etsystatic.com/25924315/r/il/b87247/4826173692/il_794xN.4826173692_e7xp.jpg'
              }
              sx={{ width: 150, height: 150 }}
            />
            <div>[UserName]</div>
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
