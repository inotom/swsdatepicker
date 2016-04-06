import assert from 'power-assert';
import getStartDate from '../src/swsdatepicker/getStartDate';

describe('カレンダーの最初のマスに表示される年月日について', function() {

  it('2015年2月の場合', function() {
    let d = getStartDate(2015, 1);
    assert(d.getFullYear() === 2015);
    assert(d.getMonth() === 1);
    assert(d.getDate() === 1);
    assert(d.getDay() === 0);
  });

  it('2015年8月の場合', function() {
    let d = getStartDate(2015, 7);
    assert(d.getFullYear() === 2015);
    assert(d.getMonth() === 6);
    assert(d.getDate() === 26);
    assert(d.getDay() === 0);
  });

  it('2016年1月の場合', function() {
    let d = getStartDate(2016, 0);
    assert(d.getFullYear() === 2015);
    assert(d.getMonth() === 11);
    assert(d.getDate() === 27);
    assert(d.getDay() === 0);
  });

  it('2016年3月の場合', function() {
    let d = getStartDate(2016, 2);
    assert(d.getFullYear() === 2016);
    assert(d.getMonth() === 1);
    assert(d.getDate() === 28);
    assert(d.getDay() === 0);
  });

  it('2016年4月の場合', function() {
    let d = getStartDate(2016, 3);
    assert(d.getFullYear() === 2016);
    assert(d.getMonth() === 2);
    assert(d.getDate() === 27);
    assert(d.getDay() === 0);
  });
});
