import assert from 'power-assert';
import getOffsetDays from '../src/swsdatepicker/getOffsetDays';

describe('前月の表示日数について', function() {

  it('0日の場合(日曜日開始)', function() {
    assert(getOffsetDays(2015, 1) === 0);
    assert(getOffsetDays(2015, 2) === 0);
    assert(getOffsetDays(2015, 10) === 0);
    assert(getOffsetDays(2016, 4) === 0);
  });

  it('1日の場合(月曜日開始)', function() {
    assert(getOffsetDays(2015, 5) === 1);
    assert(getOffsetDays(2016, 1) === 1);
    assert(getOffsetDays(2016, 7) === 1);
  });

  it('2日の場合(火曜日開始)', function() {
    assert(getOffsetDays(2015, 8) === 2);
    assert(getOffsetDays(2015, 11) === 2);
    assert(getOffsetDays(2016, 2) === 2);
    assert(getOffsetDays(2016, 10) === 2);
  });

  it('3日の場合(水曜日開始)', function() {
    assert(getOffsetDays(2015, 3) === 3);
    assert(getOffsetDays(2015, 6) === 3);
    assert(getOffsetDays(2016, 5) === 3);
  });

  it('4日の場合(木曜日開始)', function() {
    assert(getOffsetDays(2015, 0) === 4);
    assert(getOffsetDays(2015, 9) === 4);
    assert(getOffsetDays(2016, 8) === 4);
    assert(getOffsetDays(2016, 11) === 4);
  });

  it('5日の場合(金曜日開始)', function() {
    assert(getOffsetDays(2015, 4) === 5);
    assert(getOffsetDays(2016, 0) === 5);
    assert(getOffsetDays(2016, 3) === 5);
    assert(getOffsetDays(2016, 6) === 5);
  });

  it('6日の場合(土曜日開始)', function() {
    assert(getOffsetDays(2015, 7) === 6);
    assert(getOffsetDays(2016, 9) === 6);
  });
});
