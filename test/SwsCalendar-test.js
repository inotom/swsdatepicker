import assert from 'power-assert';
import SwsCalendar from '../src/swsdatepicker/SwsCalendar';

describe('SwsCalendar クラスについて', function() {

  it('翌月に変更', function() {

    let calJan = new SwsCalendar(new Date(2016, 0));
    calJan.next();
    assert(calJan.getFullYear() === 2016);
    assert(calJan.getMonth() === 1);

    let calDec = new SwsCalendar(new Date(2016, 11));
    calDec.next();
    assert(calDec.getFullYear() === 2017);
    assert(calDec.getMonth() === 0);
  });

  it('前月に変更', function() {
    let calJan = new SwsCalendar(new Date(2016, 0));
    calJan.prev();
    assert(calJan.getFullYear() === 2015);
    assert(calJan.getMonth() === 11);

    let calDec = new SwsCalendar(new Date(2016, 11));
    calDec.prev();
    assert(calDec.getFullYear() === 2016);
    assert(calDec.getMonth() === 10);
  });
});
