/*


CIT 281
Project 2


Name: Aidan Range


*/

// Returns a random string of length between minLength and maxLength (inclusive)
function getRandomString(minLength, maxLength) {
    let result = "";
    let stringLength = getRandomInteger(minLength, maxLength + 1);
  
    for (let i = 0; i < stringLength; i++) {
      result += getRandomLetter();
    }
  
    return result;
  }
  
  console.log(getRandomString(10, 20)); // Use getRandomString() with minLength = 10 and maxLength = 20
  
  
  // Returns the input string sorted in ascending order
  function getSortedString(string) {
    return string.split('').sort().join('');
  }
  
  let randomString = getRandomString(10, 20);
  console.log(randomString);
  console.log(getSortedString(randomString)); // Use getSortedString() to sort the random string in ascending order
  
  