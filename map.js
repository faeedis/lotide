var map = function(array, callback) {
  var results = [];
  for (var item of array) {
    results.push(callback(item));
  }
  return results;
};

var words = ["grouund", "contol", "to", "major", "tom"];

var results1 = map(words, function(word) {
  return word[0];
});
console.log(results1);
