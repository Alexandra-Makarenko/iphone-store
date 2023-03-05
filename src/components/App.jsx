import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { useEffect, lazy } from 'react';
// import { useDispatch } from 'react-redux';
// import { ToastContainer } from 'react-toastify';
// import { refreshUser } from 'redux/auth/authOperations';
// import { useAuth } from 'hooks/useAuth';
// import { RestrictedRoute } from './RestrictedRoute';
// import { PrivateRoute } from './PrivateRoute';
// import { Loader } from 'components/Loader/Loader';

const Home = lazy(() => import('../pages/Home/Home'));
// const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
// const ForgotPasswordPage = lazy(() =>
//   import('../pages/ForgotPassword/ForgotPasswordPage')
// );
// const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
// const OurFriendsPage = lazy(() =>
//   import('../pages/OurFriendsPage/OurFriendsPage')
// );
const ProductsPage = lazy(() => import('../pages/ProductsPage/ProductsPage'));
const Cart = lazy(() => import('../pages/Cart/Cart'));
const UserPage = lazy(() => import('../pages/UserPage/UserPage'));
const Auth = lazy(() => import('../pages/Auth/Auth'));
// const UserPage = lazy(() =>
//   import('./Notices/NoticesCategoryList/NoticesCategoryList')
// );
// const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  // const dispatch = useDispatch();

  // const { isRefreshing } = useAuth();

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/user/:id" element={<UserPage />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};