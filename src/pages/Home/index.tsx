import * as S from './style';

import Calendar from '@/components/feature/Calendar';
import CovidChart from '@/components/feature/Covid/CovidChart';
import CovidStatus from '@/components/feature/Covid/CovidStatus';
import Particulate from '@/components/feature/Particulate';

const Home = () => {
  return (
    <S.Container>
      <Calendar />
      <S.CovidContainer>
        <CovidStatus />
        <CovidChart />
      </S.CovidContainer>
      <Particulate />
    </S.Container>
  );
};

export default Home;
