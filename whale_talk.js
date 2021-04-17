// create two arrays
let input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];
// a for loop to iterate through each letter of the input variable text.
 for (let inputIndex = 0; inputIndex < input.length; inputIndex++){
   // a nested for loop 
   for (let vowel = 0; vowel < vowels.length; vowel++){
    if (input[inputIndex] === vowels[vowel]){
      if (input[inputIndex] === 'e'){
          resultArray.push('ee');
      }
      else if (input[inputIndex] === 'u'){
                resultArray.push('uu');
      }
      else {
        resultArray.push(input[inputIndex]); 
      }
     }
   }
 }
 console.log(resultArray.join('').toUpperCase());
    

