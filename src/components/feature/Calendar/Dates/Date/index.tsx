import * as S from './style';
import { DateProps } from './types';

const Date = ({ date, today }: DateProps) => {
  return (
    <S.Container date={Number(date)} {...{ today }}>
      {date}
    </S.Container>
  );
};

export default Date;
