import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { lazy } from 'react';
// import { PrivateRoute } from './PrivateRoute';
// import { RestrictedRoute } from './RestrictedRoute';
// import { refreshUser } from 'redux/auth/operations';
// import { useAuth } from 'hooks';



const Home = lazy(() => import('../pages/Home/Home'));
const ProductsPage = lazy(() => import('../pages/ProductsPage/ProductsPage'));
const Cart = lazy(() => import('../pages/Cart/Cart'));
const UserPage = lazy(() => import('../pages/UserPage/UserPage'));
const Register = lazy(() => import('../pages/Auth/RegisterForm/RegisterForm'));
const Login = lazy(() => import('../pages/Auth/LoginForm/LoginForm'));


export const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};