import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';


export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isAuth } = useAuth();
  const shouldRedirect = !isAuth;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
