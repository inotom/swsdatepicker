import isUndefined from './isUndefined';

export default (s) => {
  return isUndefined(s) || s.length === 0;
};
