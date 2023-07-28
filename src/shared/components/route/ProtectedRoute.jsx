import { useContext, useEffect } from 'react';

import { Navigate, Outlet } from 'react-router';

import { CircularProgress, Box } from '@mui/material';

import useAuth from '../../hooks/useAuth';
import { AffContext } from '../../context/AffContext';

const ProtectedRoute = ({ required = {}, redirectPath = '/auth', children }) => {
  const { loading, loggedIn, admin, affiliation } = useAuth();
  const { affFormPosted, setAffFormPosted } = useContext(AffContext);

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
    `protected route: loading: ${loading} loggedIn: ${loggedIn}, admin: ${admin}, affiliation: ${affiliation}, affiliationEnrolled: ${affFormPosted.affContextController.affEmail}`,
  );
  console.log(affFormPosted.affContextController.affEmail);
  if (
    (required.hasOwnProperty('loggedIn') && required.loggedIn != loggedIn) ||
    (required.hasOwnProperty('admin') && required.admin != admin) ||
    (required.hasOwnProperty('affiliationNotEnrolled') &&
      affFormPosted.affContextController.affEmail)
  ) {
    console.log('protected route redirect to ' + redirectPath);
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
