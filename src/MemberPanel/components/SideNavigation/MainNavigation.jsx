import CustomBreadcrumbs from './CustomBreadcrumbs';
import NavLinks from './NavLinks';

const MainNavigation = () => {
  return (
    <div>
      <CustomBreadcrumbs />
      <aside className='sm:w-full lg:w-64'>
        <div className='h-full overflow-y-auto rounded-lg bg-gray-700 px-3 py-4'>
          <nav>
            <NavLinks />
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default MainNavigation;
