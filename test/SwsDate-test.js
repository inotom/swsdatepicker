import assert from 'power-assert';
import SwsDate from '../src/swsdatepicker/SwsDate';

describe('SwsDate クラスについて', function() {

  it('フォーマットされた日時文字列', function() {
    assert((new SwsDate(new Date(2016, 1, 1))).toFormattedString() === '2016-02-01');
    assert((new SwsDate(new Date(2016, 1, 9))).toFormattedString() === '2016-02-09');
    assert((new SwsDate(new Date(2016, 1, 10))).toFormattedString() === '2016-02-10');
    assert((new SwsDate(new Date(2016, 8, 10))).toFormattedString() === '2016-09-10');
    assert((new SwsDate(new Date(2016, 9, 1))).toFormattedString() === '2016-10-01');
    assert((new SwsDate(new Date(2016, 9, 10))).toFormattedString() === '2016-10-10');
  });
});
