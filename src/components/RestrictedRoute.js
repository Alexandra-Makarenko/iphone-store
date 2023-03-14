import { useAuth } from '../hooks';
import { Navigate } from 'react-router-dom';


export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isAuth } = useAuth();
  return isAuth ? <Navigate to={redirectTo} /> : Component;
};
