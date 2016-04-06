import assert from 'power-assert';
import isEmptyStr from '../src/swsdatepicker/utils/isEmptyStr';

describe('isEmptyStr 関数について', function() {

  it('empty な文字列', function() {
    assert(isEmptyStr('') === true);
    assert(isEmptyStr(void(0)) === true);
  });

  it('empty で無い文字列', function() {
    assert(isEmptyStr('a') === false);
  });
});
