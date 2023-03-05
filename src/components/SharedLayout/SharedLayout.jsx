import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { SharedLayoutBox } from './SharedLayout.styled';
// import { Loader } from 'components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Footer/>
    </div>
  );
};