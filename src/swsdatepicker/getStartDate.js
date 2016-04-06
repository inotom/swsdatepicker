/**
 * カレンダーの最初のマスに表示される Date オブジェクトを返す
 *
 * @param {Number} year 年.
 * @param {Number} month 月(1月を0とする).
 * @return {Date}
 */
export default (year, month) => {
  let date = new Date(year, month, 1);
  let week = date.getDay();
  date.setDate(date.getDate() - week);
  return date;
};
