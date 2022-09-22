function isPalindrome(word) {
  const lowerCaseWord = word.toLowerCase()
  const charIteration = Math.ceil(word.length / 2)
  debugger  
  for (let i = 0; i < charIteration; i++) {
    const j = lowerCaseWord.length - 1 - i    
    console.log(lowerCaseWord[i])
    console.log(lowerCaseWord[j])
    return lowerCaseWord[i] === lowerCaseWord[j]
    }
  }

isPalindrome("racecar")

// // You can run `node index.js` to view these console logs
// if (require.main === module) {
//   // add your own custom tests in here
//   console.log("Expecting: true");
//   console.log("=>", isPalindrome("racecar"));

//   console.log("");

//   console.log("Expecting: false");
//   console.log("=>", isPalindrome("robot"));
//   console.log("");

//   console.log("Expecting: false");
//   console.log("=>", isPalindrome("racezcar"));
// }

// module.exports = isPalindrome;



/* 
  Palindrome is going to take a string of words and look at each letter.
  it will look at each index and determine if the inverse is the same character

*/

/*
  1) takes both strings and converts all letters to lower case
      Inverse formulas
        create a new array that takes in the characters of each letter
  2) formula begins with the front end and the backend
  3) it should iterate (string.length/2) and round up if odd number Math.Ceil
  4) boolean (index 1 === string.length) it compares the two different characters with a boolean statement
        string + X === string.length - x
  5)set a counter++ on the front end and set a counter-- on the back end
  6) the first false statement should stop the code
*/

