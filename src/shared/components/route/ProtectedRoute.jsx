import { Navigate, Outlet } from 'react-router';
import useAuth from '../../hooks/useAuth';

const ProtectedRoute = ({ required = {}, redirectPath = '/auth', children }) => {
  const { sessionId, admin, affiliated } = useAuth();

  if (
    (required.hasOwnProperty('login') && required.login != !!sessionId) ||
    (required.hasOwnProperty('admin') && required.admin != admin) ||
    (required.hasOwnProperty('affiliated') && required.affiliated != affiliated)
  ) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
