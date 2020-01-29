//Declares html elements
let words = require('an-array-of-english-words')
let forbiddenWords = ["a"]
let goodWords = []
let allTies = [];
let longestWords =[]
let character
let word
let chillWord = true
//goes through the words in the all words array
for (let i= 0; i<words.length; i++){
 //goes through letters in the the selected word 
 for(let j=0; j<words[i].length;j++){
     word = words[i]
     //decalares the selected character
    character = word[j]
    //changes once it detects a forbidden character
     if(chillWord == false){
         break
     }
     else{
     //checks if the character is a forbiden boi
     for(let k = 0; k < forbiddenWords.length ;k++){
         if (character != forbiddenWords[k]){
         }
         else{
             chillWord = false
           
             break;
         }
     }
 }
 }
 if(chillWord == true){
 goodWords.push(word)
 }
 else{
 chillWord = true
 }
}
let firstWord = goodWords[0]
for(let l=1; l < goodWords.length; l++)
{
  let secondWord = goodWords[l]
  if(secondWord.length > firstWord.length) {
      firstWord = secondWord
  }
  else if(secondWord.length == firstWord.length){
    allTies.push(secondWord)
    allTies.push(firstWord)
  }
  else {
      firstWord = firstWord
  }
}
allTies.push(firstWord)

//compares all of the words that tied and finds the longest ties
longestWord = allTies[allTies.length - 1]
longestWords.push(longestWord)
for(let m=0; m<allTies.length; m++){
    let tie = allTies[m]
    if (longestWord.length == tie.length && tie != longestWord){
        longestWords.push(tie)
    }
}
console.log("The longest words are "+ longestWords)
console.log("The longest word(s) are "+ longestWord.length+ " Characters long.")