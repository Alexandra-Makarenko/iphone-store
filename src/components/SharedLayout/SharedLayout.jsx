import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react'
import {SharedLayoutBox} from './SharedLayout.styled'

export const SharedLayout = () => {
  return (
     <SharedLayoutBox>
      <Header />
      <Suspense fallback={<Spinner color='teal' />}>
        <Outlet />
      </Suspense>
      <Footer/>
     </SharedLayoutBox>
  );
};