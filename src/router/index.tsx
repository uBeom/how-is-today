import { Routes, Route } from 'react-router-dom';

import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Settings from '@/pages/Settings';
import Todo from '@/pages/Todo';
import * as S from '@/router/style';

const Router = () => {
  return (
    <S.Container>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/home' element={<Home />} />
          <Route path='/todo' element={<Todo />} />
          <Route path='/settings' element={<Settings />} />
        </Route>
      </Routes>
    </S.Container>
  );
};

export default Router;
