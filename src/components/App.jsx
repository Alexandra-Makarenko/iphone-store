import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { lazy } from 'react';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';




const Home = lazy(() => import('../pages/Home/Home'));
const ProductsPage = lazy(() => import('../pages/ProductsPage/ProductsPage'));
const Cart = lazy(() => import('../pages/Cart/Cart'));
const UserPage = lazy(() => import('../pages/UserPage/UserPage'));
const Register = lazy(() => import('../components/Auth/RegisterForm/RegisterForm'));
const LoginPage = lazy(() => import('../pages/Auth/LoginPage/LoginPage'));


export const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
           <Route
            path="/register"
            element={
              <RestrictedRoute component={<Register/>} redirectTo="/user" />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={<LoginPage/>} redirectTo="/user" />
            }/>
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/user"
            element={<PrivateRoute component={<UserPage/>} redirectTo="/login" />}
          />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};