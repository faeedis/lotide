const takeUntil = function (array, callback) {
  let newArr = []
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === false) {
      newArr.push(array[i])
    } else {
      break
    }
  }

  return newArr
}



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const eqArrays = function (array1, array2) {
  let output = true;
  if (array1.length !== array2.length) return false;
  for (let element = 0; element < array1.length; element += 1) {
    if (Array.isArray(array1[element]) || Array.isArray(array2[element])) {
      output = output && eqArrays(array1[element], array2[element]);
    } else if (array1[element] !== array2[element]) {
      output = output && false;
    }
  }
  return output;
};

//Test that should pass
assertArraysEqual(results1,[1,2,5,7,2])

// Test that should fail 

assertArraysEqual(results1,[1,2,5,7,-1])
