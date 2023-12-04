/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(inpstr) {
  let strlower = inpstr.toLowerCase() 
  let str = strlower.replace(/[^\w\s]/g,'');
  str = str.replace(/\s/g, '');
  let arr = []
  let revarr = []
  for(let i=0; i<str.length; i++){
    arr.push(str[i]);
  }
  for(let i=arr.length-1; i>-1; i--){
    revarr.push(arr[i])
  }
  for(let i=0; i<str.length; i++){
    if(arr[i]!==revarr[i]){
      return false
    }
  }
  return true
}

module.exports = isPalindrome;

// console.log(isPalindrome([1,2,3]))
