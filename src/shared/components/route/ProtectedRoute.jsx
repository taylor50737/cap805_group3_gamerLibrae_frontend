import { Navigate, Outlet } from 'react-router';

import { CircularProgress, Box } from '@mui/material';

import useAuth from '../../hooks/useAuth';

const ProtectedRoute = ({ required = {}, redirectPath = '/auth', children }) => {
  const { loading, loggedIn, admin, affiliation } = useAuth();

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CircularProgress sx={{ color: 'gray' }} />
      </Box>
    );
  }
  console.log(
    `protected route: loading: ${loading} loggedIn: ${loggedIn}, admin: ${admin}, affiliation: ${affiliation.affEmail}`,
  );
  console.log(!affiliation.affEmail);
  if (
    (required.hasOwnProperty('loggedIn') && required.loggedIn != loggedIn) ||
    (required.hasOwnProperty('admin') && required.admin != admin) ||
    (required.hasOwnProperty('affiliation') && typeof affiliation != 'object')
    // (required.hasOwnProperty('affEmail') && affiliation.affEmail != 'object')
  ) {
    console.log('protected route redirect to ' + redirectPath);
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
