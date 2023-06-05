var takeUntil = function(array, callback) {
  var newArr = [];
  var i = 0;
  while (i < array.length && !callback(array[i])) {
    newArr.push(array[i]);
    i++;
  }
  return newArr;
};

var data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
var results1 = takeUntil(data1, function(x) {
  return x < 0;
});
console.log(results1);

console.log('---');

var data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
var results2 = takeUntil(data2, function(x) {
  return x === ',';
});
console.log(results2);
