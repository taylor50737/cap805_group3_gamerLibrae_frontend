import { Navigate, Outlet } from 'react-router';
import useAuth from '../../hooks/useAuth';

const ProtectedRoute = ({ required = {}, redirectPath = '/auth', children }) => {
  const { loading, loggedIn, admin, affiliated } = useAuth();
  if (loading) {
    return <h1>loading, authenticating your session</h1>;
  }
  console.log(
    `protected route: loading: ${loading} loggedIn: ${loggedIn}, admin: ${admin}, affiliated: ${affiliated}`,
  );
  if (
    (required.hasOwnProperty('loggedIn') && required.loggedIn != loggedIn) ||
    (required.hasOwnProperty('admin') && required.admin != admin) ||
    (required.hasOwnProperty('affiliated') && required.affiliated != affiliated)
  ) {
    console.log('protected route redirect to ' + redirectPath);
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
