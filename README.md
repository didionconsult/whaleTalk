# whaleTalk




#### **Whale Talk Loop Exercise**

###### Whale Talk:  Take a phrase like 'turpentine and turtles' and translate it into its "whale talk" equivalent: 'UUEEIEEAUUEE'. There are a few simple rules for translating text to whale language: There are no consonants. Only vowels excluding "y". The u's and e's are extra long, so we must double them in our program. Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean. To accomplish this translation, we can use our knowledge of loops. Let's get started! If you get stuck during this project, check out the project walkthrough video which can be found at the bottom of the page after the final step of the project. Mark the tasks as complete by checking them off.

###### 1.) 
###### Create a variable named input that is equal to any phrase you'd like. This variable will contain the text you want to translate into “whale talk”. Try a string like: let input = 'turpentine and turtles';

###### 2. )
###### Whales only speak in vowels so you need an array of vowels to be extracted from the input variable. Set the array equal to a variable named vowels that will not be updated. Note: Whales don't consider "y" a vowel. `const vowels = ['a', 'e', 'i', 'o', 'u']`;

###### 3. )
###### Create a variable named resultArray and set it equal to an empty array: []. This will serve as a place to store the vowels from the input string.

###### 4. )
###### Write logic that compares the text of the input variable to the vowels array to find all the vowels in the input string. You can create this logic with a for loop, to check if each letter in the input string is a vowel or not.

###### 5. )
###### To check your work, log the iterator numbered position inside the for loop and run your code. This should count the number of characters in your input string. Comment out this code when you're ready to move on. For example, if input is 22 characters long, you should `console.log('i is '+ i)`;

###### 6. )
###### Create a nested for loop inside of the for loop you just wrote. Make the inner loop iterate through the vowels array each time the outer loop runs. This will enable you to check each letter of input against all the vowels elements during each iteration. Remember, the inner for loop and outer for loop should have different iterator variables. The syntax for a nested for loop is: `for (let i = 0; i < input.length; i++) { ... for (let j = 0; j < vowels.length; j++) { ... } }`

###### 7. )
###### To check your work, log the iterator number positions inside the inner for loop and run your code. You should see 0 through 4 repeatedly because vowels is 5 elements long. For example, you should `console.log('j is '+ j)`;

###### 8. )
###### Inside the second for loop, write a code block that compares the input letter to every letter in the vowels array. Use the .push() method to add matching letters the array that stores the results. To single out letters from a string use `stringName[i]` and compare it to the array. `stringName[i]` works just like accessing an element within an array. That's because JavaScript internally stores every character in a string at a numbered position.

###### 9. )
###### Whales double their e's and the u's in their language. Write an if statement that checks if each letter in the input string is equal to 'e'. If so, `.push() input[i]` to the resultArray. Note, this statement belongs after the inner for loop block inside the outer for loop. This is because you only want to perform this check once for every letter in the input. To push the e's a second time create a conditional like this: `if (stringName[i] === 'e'){ myArray.push(stringName[i]); }`

###### 10. )
###### Next, you want to double the letter u, so you must mimic the code from the last step. Re-create the if statement, but modify it so it pushes the letter u a second time. You can also use the `||` operator to check for multiple conditions in an if statement like so: `if (stringName[i] === 'e' || stringName[i] === 'u') { myArray.push(stringName[i]); };`

###### 11. )
###### At the bottom of the program, log `resultArray` to the console.

###### 12. )
###### Notice when we log the array, the output has commas between each letter. To produce proper whale language, we want to capitalize the array elements and put them together as one string. Make sure you do the following: Use `.join()` method make a continuous string with '' as an argument (or, single quotations with no space) so the elements aren't separated. Use the `.toUpperCase()` function, to make the string uppercase. Note, methods can [be] chained together like: `console.log(myArray.join('').toUpperCase());`

###### 13. )
###### Run the program and sing the output out loud — you officially speak whale! To confirm, if you change the value of input to 'turpentine and turtles', the whale version would read: 'UUEEIEEAUUEE'. Try other tests like 'Hi, Human' (to get IUUA) or 'A whale of a deal!' (to get 'AAEEOAEEA').




