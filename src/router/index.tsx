import { Routes, Route } from 'react-router-dom';

import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import Settings from '@/pages/Settings';
import * as S from '@/router/style';

const Router = () => {
  return (
    <S.Container>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/home' element={<Home />} />
          <Route path='/settings' element={<Settings />} />
        </Route>
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </S.Container>
  );
};

export default Router;
