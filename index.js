function isPalindrome(word) {
  // Write your algorithm here

  function reverseString(word) {
    return word.split("").reverse().join("");
  }
  
  function isPalindrome(word) {
    // Write your algorithm here
    // reverse the input string
    const reversedWord = reverseString(word);
    // compare the reversed string to the input
    return word === reversedWord;
  }
  const reversedWord = reverseString(word);
  // compare the reversed string to the input
  return word === reversedWord;
}

/*
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("gig"));

  console.log("");
}


module.exports = isPalindrome;
