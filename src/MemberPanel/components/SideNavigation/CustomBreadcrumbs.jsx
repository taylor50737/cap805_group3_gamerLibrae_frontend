import { NavLink } from 'react-router-dom';
import { Breadcrumbs } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const CustomBreadcrumbs = () => {
  return (
    <div className='px-3 py-4'>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize='small' />}
        aria-label='breadcrumb'
        sx={{
          color: 'white',
        }}
      >
        <a href='/' underline='hover' color='inherit'>
          Home Page
        </a>
        <NavLink underline='hover' color='inherit' href='/'>
          Member Panel
        </NavLink>
      </Breadcrumbs>
    </div>
  );
};

export default CustomBreadcrumbs;
