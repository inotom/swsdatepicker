import getStartDate from './getStartDate';
import SwsDate from './SwsDate';

const MAX = 6 * 7; // row size * week size

/**
 * カレンダークラス
 */
export default class {

  constructor(date) {
    this._list = [];
    this.set(date);
  }

  next() {
    let isDecember = this._month === 11;
    let year = isDecember ? this._year + 1 : this._year;
    let month = isDecember ? 0 : this._month + 1;
    this._set(year, month);
    return this;
  }

  prev() {
    let isJanuary = this._month === 0;
    let year = isJanuary ? this._year - 1 : this._year;
    let month = isJanuary ? 11 : this._month - 1;
    this._set(year, month);
    return this;
  }

  set(date) {
    this._set(date.getFullYear(), date.getMonth());
    return this;
  }

  getFullYear() {
    return this._year;
  }

  getMonth() {
    return this._month;
  }

  getList() {
    return this._list;
  }

  _set(year, month) {
    this._year = year;
    this._month = month;
    this._setList();
    return this;
  }

  _setList() {
    let startDate = getStartDate(this._year, this._month);
    for (let i = 0; i < MAX; i++) {
      let date = new SwsDate(startDate);
      this._list[i] = date;
      startDate.setDate(startDate.getDate() + 1);
    }
  }
}
