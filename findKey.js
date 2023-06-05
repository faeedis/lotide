var findKey = function (object, callback) {
  for (var key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

var result = findKey({
  "Blue Hills": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "nomanoma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, function(x) {
  return x.stars === 2;
});

console.log(result);
