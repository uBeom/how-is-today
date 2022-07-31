import Dates from './Dates';
import Days from './Days';
import { MyDate } from './myDate';
import * as S from './style';

import { MONTHS } from '@/constants/calendar';

const Calendar = () => {
  return (
    <S.Container>
      {/* heading 추가하고 readonly */}
      <S.Title>{`${
        MONTHS[MyDate.getCurMonth()]
      } ${MyDate.getCurYear()}`}</S.Title>
      <Days />
      <Dates />
    </S.Container>
  );
};

export default Calendar;
