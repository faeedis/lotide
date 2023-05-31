// Example function
const eqArrays = function (arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false
  }

  if (arr1.length !== arr2.length) {
    return false
  }

  for (let b = 0; b < arr1.length; b++) {
    if (arr1[b] !== arr2[b]) return false
  }

  return true
}
// Example function
const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`)
      ;
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}



const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      }  else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};


assertArraysEqual(letterPositions('hello').e, [1]);
