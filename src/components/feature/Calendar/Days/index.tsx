import * as S from './style';

import { DAYS } from '@/constants/calendar';

const Days = () => {
  const week = DAYS.map((month, index) => <S.Days key={index}>{month}</S.Days>);

  return <S.Container>{week}</S.Container>;
};

export default Days;
