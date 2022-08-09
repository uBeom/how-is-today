const BASE_TIMES = [
  '0200',
  '0500',
  '0800',
  '1100',
  '1400',
  '1700',
  '2000',
  '2300',
];
const API_TIMES = [
  '0210',
  '0510',
  '0810',
  '1110',
  '1410',
  '1710',
  '2010',
  '2310',
];

const changeDoubledigits = (number: number) =>
  number < 10 ? `0${number}` : number;

export class MyDate {
  static today = new Date(Date.now());

  static getCurYear() {
    return MyDate.today.getFullYear();
  }

  static getCurMonth() {
    return MyDate.today.getMonth() + 1;
  }

  static getCurDate() {
    return MyDate.today.getDate();
  }

  static getEmptyDate() {
    return new Date(MyDate.getCurYear(), MyDate.getCurMonth()).getDay();
  }

  static getTotalDate() {
    return new Date(MyDate.getCurYear(), MyDate.getCurMonth(), 0).getDate();
  }

  static getWeekDate() {
    const WEEK = 7;
    const weekArr: string[] = [];

    for (let i = 1; i <= WEEK; i++) {
      weekArr.push(
        new Date(
          MyDate.getCurYear(),
          MyDate.getCurMonth() - 1,
          MyDate.getCurDate() - i,
        ).toLocaleDateString(),
      );
    }

    return weekArr.map(date => date.split('.').slice(1, 3).join('.')).reverse();
  }

  static getBaseDate() {
    const year = this.getCurYear();
    const month = changeDoubledigits(this.getCurMonth());
    const date = changeDoubledigits(this.getCurDate());

    return `${year}${month}${date}`;
  }

  static getBaseTime() {
    const currentMinute = changeDoubledigits(MyDate.today.getMinutes());
    const currentTime = `${MyDate.today.getHours()}${currentMinute}`;
    const currentBaseTimeIndex =
      API_TIMES.findIndex(apiTime => apiTime > currentTime) - 1;

    if (!BASE_TIMES[currentBaseTimeIndex]) return BASE_TIMES[0];

    return BASE_TIMES[currentBaseTimeIndex];
  }
}
