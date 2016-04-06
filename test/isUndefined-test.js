import assert from 'power-assert';
import isUndefined from '../src/swsdatepicker/utils/isUndefined';

describe('isUndefined 関数について', function() {

  it('undefined な値', function() {
    assert(isUndefined(void(0)) === true);
    assert(isUndefined() === true);
  });

  it('undefined ではない値', function() {
    assert(isUndefined('') === false);
    assert(isUndefined(-1) === false);
    assert(isUndefined(0) === false);
    assert(isUndefined(1) === false);
    assert(isUndefined(true) === false);
    assert(isUndefined(false) === false);
    assert(isUndefined(null) === false);
  });
});
