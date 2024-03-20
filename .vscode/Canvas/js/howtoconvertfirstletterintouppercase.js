const username = 'my name is bikash';

// Step 1: Split the string into an array of words
const wordsArray = username.split(' ');
const wordsofarr = wordsArray.map((ele)=> `${ele.at(0).toUpperCase()}${ele.substring(1).toLowerCase()}` )
console.log(wordsofarr.join(' ').toString())
// console.log(wordsArray)
// // Step 2: Iterate over each word, transforming the first letter to uppercase and the rest to lowercase
// const capitalizedWords = wordsArray.map(word => {
//   // Check if the word is not empty to prevent errors on strings leading, trailing, or multiple spaces
//   if (word) {
//     return word.at(0).toUpperCase() + word.substring(1).toLowerCase();
//   }
//   return word;
// });

// // Step 3: Join the transformed words back into a single string
// const capitalizedUsername = capitalizedWords.join(' ');

// console.log(capitalizedUsername);
