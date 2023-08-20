/** product: calculate the product of an array of numbers. */

function product(arr) {
  if (arr.length === 0) {
      return 1;
  }

  const number = arr.shift();
  const productOfRest = product(arr); // Recursively calculate product for the rest of the array
  const result = number * productOfRest;
  return result;
}

/** longest: return the length of the longest word in an array of words. */
function longest(words) {
  if (words.length === 0) {
      return 0;  // If the array is empty, the longest word has a length of 0.
  }

  const word = words.shift();
  const remainingWordsLength = longest(words);  // Recursively find the length of the longest word in the remaining array.
  
  // Compare the length of the current word with the length of the longest word in the remaining array.
  const currentWordLength = word.length;
  return Math.max(currentWordLength, remainingWordsLength);
}

/** everyOther: return a string with every other letter. */


function everyOther(str) {
  if (str.length <= 1) {
      return str; // Base case: return the string as is
  }

  let letter = str[0]; // Get the first letter
  let remainingLetters = everyOther(str.slice(2)); // Recurse on the rest of the string, skipping the next letter

  return letter + remainingLetters; // Combine the letter with the remaining processed letters
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  // Base case: If the string has 0 or 1 characters, it's a palindrome
  if (str.length <= 1) {
      return true;
  }

  // Compare the first and last characters of the string
  if (str[0] !== str[str.length - 1]) {
      return false; // If the characters don't match, it's not a palindrome
  }

  // Recur on the substring without the first and last characters
  return isPalindrome(str.slice(1, -1));
}



/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, currentIndex) {
  // Base case: If currentIndex exceeds the array length, the target was not found
  if (currentIndex >= arr.length) {
    return -1;
}

// Check if the current element matches the target string
if (arr[currentIndex] === target) {
    return currentIndex; // Return the current index if a match is found
}

// Recur on the rest of the array with an incremented index
return findIndex(arr, target, currentIndex + 1);

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {   // Base case: if the string is empty or has only one character, return it as is
  if (str.length <= 1) {
      return str;
  }

  // Recur on the substring excluding the first character,
  // and concatenate the first character at the end
  return revString(str.slice(1)) + str[0];
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let result = [];

  for (let key in obj) {
      if (typeof obj[key] === "string") {
          result.push(obj[key]);
      } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
          result = result.concat(gatherStrings(obj[key]));
      }
  }

  return result;

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */



module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings

};
