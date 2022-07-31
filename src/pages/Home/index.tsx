import * as S from './style';

import Calendar from '@/components/feature/Calendar';
import CovidChart from '@/components/feature/Covid/CovidChart';
import CovidStatus from '@/components/feature/Covid/CovidStatus';

const Home = () => {
  return (
    <S.Container>
      <Calendar />
      <CovidStatus />
      <CovidChart />
    </S.Container>
  );
};

export default Home;
