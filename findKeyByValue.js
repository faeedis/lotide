
var assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

var findKeyByValue = function (object, value) {
  for (var key in object) {
    if (value === object[key]) {
      return key;
    }
  }
};


var bestTVShowsByGenre = {
  sci_fi: "The Expen",
  comedy: "Brooklyn",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '80s Show"), undefined);
