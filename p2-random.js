/*


CIT 281
Project 2


Name: Aidan Range


*/


// Returns a random number between min (inclusive) and max (exclusive)


function getRandomInteger(min, max) {


    return Math.floor(Math.random() * (max - min) + min);
    
    }
    
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    
    // New function to return a random lowercase letter
    function getRandomLetter() {
        return alphabet[getRandomInteger(0, alphabet.length)];
    }
   
    // Returns a random string of length between minLength and maxLength (inclusive)
function getRandomString(minLength, maxLength) {
    let result = "";
    let stringLength = getRandomInteger(minLength, maxLength + 1);
  
    for (let i = 0; i < stringLength; i++) {
      result += getRandomLetter();
    }
  
    return result;
  }
  
// Returns the input string sorted in ascending order
function getSortedString(string) {
    return string.split('').sort().join('');
  }
  
  let randomString = getRandomString(10, 20);
  console.log(randomString);
  console.log(getSortedString(randomString)); // Use getSortedString() to sort the random string in ascending order
  
  