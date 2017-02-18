function search(arr, val) {
  var middleIndex = Math.floor(arr.length / 2);
  var middleValue = arr[middleIndex];
  var left = [].concat(arr.slice(0, middleIndex));
  var right = [].concat(arr.slice(middleIndex + 1));

  if(middleValue === val) {
    return middleValue;
  } else if(left.length && val < middleValue) {
    return search(left, val);
  } else if(right.length && val > middleValue) {
    return search(right, val);
  }

  return -1;
}

var test = [1, 3, 16, 22, 31, 33, 34];
var output = search(test, 31);
console.log(output);

var test2 = [110, 213, 516];
var output2 = search(test2, 500);
console.log(output2);
