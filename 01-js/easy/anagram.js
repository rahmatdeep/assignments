/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()
  console.log(str1, str2)
  let letters1 = []
  let letters2 = []
  for(let i=0; i<str1.length; i++){
    letters1.push(str1[i])
  }
  for(let i=0; i<str2.length; i++){
    letters2.push(str2[i])
  }
  console.log(letters1, letters2)
  letters1.sort()
  letters2.sort();
  console.log(letters1, letters2)
  if(letters1.length!==letters2.length){
    return false
  }
  else{
    for(let i=0; i<letters1.length; i++){
      if(letters1[i]!==letters2[i]){
        return false
      }
    }
    return true
}

}

module.exports = isAnagram;

console.log(isAnagram("Red", "dEr"));
