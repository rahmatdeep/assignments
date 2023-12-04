/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let count=0;
    let strin = str.toLowerCase();
    for(let i=0; i<str.length; i++){
      if(strin[i]==="a"||strin[i]==="e"||strin[i]==="i"||strin[i]==="o"||strin[i]==="u"){
        count+=1
      }
    }
    return count;
}

module.exports = countVowels;
// console.log(countVowels("Hello"))