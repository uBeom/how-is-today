import * as S from './style';

const Date = ({ date, today }: { date: string; today: number }) => {
  return (
    <S.Container date={Number(date)} {...{ today }}>
      {date}
    </S.Container>
  );
};

export default Date;
