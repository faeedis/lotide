const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
//function counts number of times a letter shows up in a string
const countLetters = function (string) {
  const results = {}
  for (const letter of string) {
    if (!results[letter])
      results[letter] = 1;
  else 
    results[letter]++

  }
  return (results)
}

//Test
const results = countLetters
assertEqual(results["l"], 1);
assertEqual(results["i"], 2);
assertEqual(results["e"], 3);
