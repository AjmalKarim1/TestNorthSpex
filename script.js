// largest number in the array.
const largestNumber = [1, 2, 3, 4, 5, 8];

function largeArray(largestNumber) {
  const largest = Math.max(...largestNumber);
  alert(`${largest} is the largest number in the array`);
  return largest;
}
largeArray(largestNumber);

// reverses a string.

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));
console.log(reverseString("ajmal"));

// all elements in an array are unique?

function areElementsAreUnique(yesNo) {
  return new Set(yesNo).size === yesNo.length;
}

console.log(areElementsAreUnique([1, 2, 3, 4]));
console.log(areElementsAreUnique([1, 2, 2, 4]));
