// assertEqual work and code
var assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


var eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (var value = 0; value < array1.length; value += 1) {
    if (array1[value] !== array2[value]) {
      return false;
    }
  }
  return true;
};


var eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (var key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

var ab = { a: "1", b: "2" };
var ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

var abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);
