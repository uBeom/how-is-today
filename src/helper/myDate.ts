export class MyDate {
  static today = new Date(Date.now());

  static getCurYear() {
    return MyDate.today.getFullYear();
  }

  static getCurMonth() {
    return MyDate.today.getMonth();
  }

  static getCurDate() {
    return MyDate.today.getDate();
  }

  static getEmptyDate() {
    return new Date(MyDate.getCurYear(), MyDate.getCurMonth()).getDay();
  }

  static getTotalDate() {
    return new Date(MyDate.getCurYear(), MyDate.getCurMonth() + 1, 0).getDate();
  }

  static getWeekDate() {
    const WEEK = 7;
    const weekArr: string[] = [];

    for (let i = 1; i <= WEEK; i++) {
      weekArr.push(
        new Date(
          MyDate.getCurYear(),
          MyDate.getCurMonth(),
          MyDate.getCurDate() - i,
        ).toLocaleDateString(),
      );
    }

    return weekArr.map(date => date.split('.').slice(1, 3).join('.')).reverse();
  }
}
