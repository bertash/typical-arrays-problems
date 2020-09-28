
exports.min = function min (array) {
  if (typeof array != 'object' || array.length == 0) {
    return 0;
  } else {
    let arraySort = array.sort(count);
    return arraySort[0];
  }
};

function count (a,b) {
  return a-b;
}

exports.max = function max (array) {
  if (typeof array != 'object' || array.length == 0) {
    return 0;
  } else {
    let arraySort = array.sort(count);
    return arraySort[arraySort.length - 1];
  }
};

exports.avg = function avg (array) {
  if (typeof array != 'object' || array.length == 0) {
    return 0;
  } else {
    let result = array.reduce((sum, current) => sum + current, 0);
    return result / array.length;

  }
};
