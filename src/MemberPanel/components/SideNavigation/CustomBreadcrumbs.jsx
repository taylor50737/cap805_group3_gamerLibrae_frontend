import { NavLink, Link } from 'react-router-dom';
import { Breadcrumbs } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const CustomBreadcrumbs = (props) => {
  return (
    <div className='px-3 py-4'>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize='small' />}
        aria-label='breadcrumb'
        sx={{
          color: 'white',
        }}
      >
        <NavLink to='/' underline='hover' color='inherit'>
          Home Page
        </NavLink>
        <NavLink to={`/member/${props.uid}`} underline='hover' color='inherit'>
          Member Panel
        </NavLink>
      </Breadcrumbs>
    </div>
  );
};

export default CustomBreadcrumbs;
