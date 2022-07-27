import { Outlet } from 'react-router-dom';

import * as S from './style';

import Header from '@/components/Header';

const Layout = () => {
  return (
    <S.Container>
      <Header />
      <Outlet />
    </S.Container>
  );
};

export default Layout;
