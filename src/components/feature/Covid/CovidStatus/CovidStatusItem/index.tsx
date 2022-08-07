import * as S from './style';
import { CovidStatusItemProps } from './types';

import useCountCovidStatus from '@/hooks/useCountCovidStatus';

const CovidStatusItem = ({ end, mock }: CovidStatusItemProps) => {
  const start = useCountCovidStatus(end, 2000);

  return (
    <S.StatusItem>
      {mock.icon}
      <S.Count>{start}</S.Count>
      <S.Title>{mock.title}</S.Title>
    </S.StatusItem>
  );
};

export default CovidStatusItem;
