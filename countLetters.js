var assertEqual = require('./assertEqual');

var countLetters = function(string) {
  var results = {};
  for (var letter of string) {
    if (!results[letter]) {
      results[letter] = 1;
    } else {
      results[letter]++;
    }
  }
  return results;
};

// Test
var testCountLetters = function() {
  var results = countLetters("hello");
  assertEqual(results["l"], 2);
  assertEqual(results["i"], 1);
  assertEqual(results["e"], 1);
};

testCountLetters();
