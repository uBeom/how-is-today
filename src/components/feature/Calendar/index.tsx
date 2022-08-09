import Dates from './Dates';
import Days from './Days';
import * as S from './style';

import { MONTHS } from '@/constants/calendar';
import { MyDate } from '@/helper/myDate';

const Calendar = () => {
  return (
    <S.Container>
      {/* heading 추가하고 readonly */}
      <S.Title>{`${
        MONTHS[MyDate.getCurMonth() - 1]
      } ${MyDate.getCurYear()}`}</S.Title>
      <Days />
      <Dates />
    </S.Container>
  );
};

export default Calendar;
