import isUndefined from './utils/isUndefined';

export default class {
  constructor(date) {
    this._year = date.getFullYear();
    this._month = date.getMonth();
    this._date = date.getDate();
  }

  getFullYear() {
    return this._year;
  }

  getMonth() {
    return this._month;
  }

  getDate() {
    return this._date;
  }

  toFormattedString() {
    let monthStr = this._month < 9 ? '0' + (this._month + 1) : this._month + 1;
    let dateStr = this._date < 10 ? '0' + this._date : this._date;
    return `${this._year}-${monthStr}-${dateStr}`;
  }

  isToday(now) {
    if (isUndefined(now)) {
      return false;
    }
    return this._date === now.getDate() &&
           this._month === now.getMonth() &&
           this._year === now.getFullYear();
  }

  isSelected(swsDate) {
    if (isUndefined(swsDate)) {
      return false;
    }
    return this._date === swsDate.getDate() &&
           this._month === swsDate.getMonth() &&
           this._year === swsDate.getFullYear();
  }
}
