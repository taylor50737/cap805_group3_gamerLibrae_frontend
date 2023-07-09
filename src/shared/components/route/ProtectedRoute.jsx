import { Navigate, Outlet } from 'react-router';
import useAuth from '../../hooks/useAuth';

const ProtectedRoute = ({ adminRequired, affiliatedRequired, redirectPath = '/', children }) => {
  const { sessionId, admin, affiliated } = useAuth();
  if (!sessionId || (adminRequired && !admin) || (affiliatedRequired && !affiliated)) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
