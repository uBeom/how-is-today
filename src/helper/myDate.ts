export class MyDate {
  static today = new Date(Date.now());

  static curYear = MyDate.today.getFullYear();

  static curMonth = MyDate.today.getMonth();

  static curDate = MyDate.today.getDate();

  static getCurYear() {
    return MyDate.curYear;
  }

  static getCurMonth() {
    return MyDate.curMonth;
  }

  static getCurDate() {
    return MyDate.curDate;
  }

  static getEmptyDate() {
    return new Date(MyDate.curYear, MyDate.curMonth).getDay();
  }

  static getTotalDate() {
    return new Date(MyDate.curYear, MyDate.curMonth + 1, 0).getDate();
  }
}
