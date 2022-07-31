import Date from './Date';

import { MyDate } from '@/components/feature/Calendar/myDate';

const Dates = () => {
  const dates = Array.from({
    length: MyDate.getEmptyDate() + MyDate.getTotalDate(),
  })
    .fill('')
    .map((_, date) => {
      if (date >= MyDate.getEmptyDate())
        return (
          <Date
            key={date}
            date={(date + 1 - MyDate.getEmptyDate()).toString()}
            today={MyDate.getCurDate()}
          />
        );

      return <Date key={date} date='' today={MyDate.getCurDate()} />;
    });

  return <div>{dates}</div>;
};

export default Dates;
