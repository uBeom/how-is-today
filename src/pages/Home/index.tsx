import * as S from './style';

import Calendar from '@/components/feature/Calendar';
import CovidStatus from '@/components/feature/Covid/CovidStatus';

const Home = () => {
  return (
    <S.Container>
      <Calendar />
      <CovidStatus />
    </S.Container>
  );
};

export default Home;
