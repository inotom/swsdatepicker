/**
 * カレンダーの最初のマスに表示される前月の日付の数を返す
 *
 * @param {Number} year 年.
 * @param {Number} month 月(1月を0とする).
 * @return {Number}
 */
export default (year, month) => {
  let date = new Date(year, month, 1);
  return date.getDay();
};
