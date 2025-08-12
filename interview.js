// Basic javascript

1. What are the different datatypes of javascript ??.
[i]Number [ii]String [iii]Boolean [iv]Undefined [v]Null [vi]



2. What is the difference betweeen let, var and const??
[i] Var : Function Scoped, can bbe redeclared and reused.
[iii] Const : Block Scoped, cant be updated nor declared.
[ii] Let : Block Scoped, can be updated but can not be redeclared.Block


3. What is hoisting in javascript.
variable should be defined before using.


4. Whats differ between == and === ?.
[i] == only compares value. 
[ii] === compares value + datatypes.


5. What is the difference between null and undefined?
Null : represnts absence of any object value. 
Undefined : represnts an uninitialized or non-existent variable.

6. How does JavaScript handle asynchronous code?
javascript uses useCallback, promises, async-await. these allow the code to execute without blocking the main thread.

7. What are arrow functions and how do they differ from regular functions?
Arrow functions are concise functions that dont have their own this useContext. They inherit the this context from the parent scope, unlike regular scope.

8. What is a closure in JavaScript? Give an example
A closure is a function that has access to its outer function has returned. example
function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}
const counter = outer();
counter(); // 1
counter(); // 2

9. What is the difference between synchronous and asynchronous JavaScript?
Synchronous: codde executtes sequentially blocking the main thread.
asynchronous: Code executes without blokcing the main thread.using callbacks, promises or async await.

10. WHats the  purpose of this keyword in javascript.
This keyword refers to the current execution context of a function. In a method, it refers to the object the method is called on.

11.Explain the concept of scope in JavaScript.
Scope refers to the region of the code where a variale is defined and accessible. JS has global scope, functiion scope and bloock scope.


12. How does JavaScript handle object cloning (shallow vs deep copy)?
// - Shallow copy: Copies the top-level properties of an object. Can be done using Object.assign() or the spread operator ({...obj}).
// - Deep copy: Copies all nested properties of an object. Can be done using JSON.parse(JSON.stringify(obj)) or a library like Lodash.


13. What is the difference between map(), filter(), and reduce()?
[i] map(): Transforms each element of an array and returns a new array.
[ii] filter(): Returns a new array with elements that pass a test.
[iii] reduce(): Accumulates values in an array to a single value.A


14. How do you select elements in the DOM using JavaScript?
[i] document.getElementById(),
[ii] document.getElementsByClassName(),
[iii]document.querySelector(), 
[iv]document.querySelectorAll().

15. How can you change the content of an HTML element using JavaScript?
You can use element.textContent, element.innerHTML, or element.innerText to change the content of an HTML element.

16. What is the difference between innerHTML, textContent, and innerText?
[i]innerHTML : Sets or gets the HTML contemt of an element.
[ii]textContent: Sets or  ggets the textcontent of an element, without html tags
[iii]innerText: Similar to textContent, but is aware of CSS styling and doesn't return hidden text.

17. How do you check if a string contains a specific substring in JavaScript?
=>Using includes() method, indexOf(), or regular expressions.

18. What is the difference between slice(), substring(), and substr()?
[i] slice(): extracts a sectio of string and returns it as a new stfring.
[ii]substring(): similar to slice(), but with different behaviour for negative indices.
[iii].substr(): Extracts a section of a string, specified by a starting index and length.

19. How can you reverse a string in JavaScript?
=> Using split(), reverse(), and join() methods:
const str = "hello";
const reversedStr = str.split("").reverse().join("");
console.log(reversedStr); // "olleh"

20. What is the difference between forEach(), map(), and for loop?
[i]forEach(): Executes a function for each element in an array , without returning an new qarray;
[ii]map(): Executes a function for each element in an array and returns a new array with SpeechRecognitionResultList.apply
[iii]forLoop: a traditional loop that allows more control over the iteration process.


21. How do you remove duplicate values from an array in JavaScript?
You can use the Set object or the filter() method :
const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // [1, 2, 3, 4, 5]

[22]Explain how to sort an array of numbers in ascending and descending order.
// Assending order
const arr = [4,8,2,5,] ;
arr.sort((a, b) => b-a);
console.log(arr);
// Descending order
arr.sort((a, b) => b - a);
console.log(arr); // [7, 4, 3, 2, 1

[23] Whats the difference between push(), pop(), shift(), and unshift()?
[i] push(): Adds one or more elements to end of an array.
[ii] pop(): Removes the last element from an array.
[iii] shift(): Removes the first element from an array.
[iv] unshift(): Adds one or more elements to the beginning of an array.

24. How can you merge two objects in JavaScript?
We can use the Object.assign() method or the spread operator ({...obj1, ...obj2}):
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // { a: 1, b: 2, c: 3, d: 4 }

25.How do you iterate over the keys and values of an object?
We can use the Object.keys(),
Object.values, or Object.entries() methods:
const obj = {a:1, b:2, c:3};
// Iterate over keys
Objext.key(obj).forEach(key => console.log(key));
// Iterate over values
Object.values(obj).forEach(value =>
  console.log(value));





// Programssssssssssssssssssssssssss
1. Check if a number is prime or not!
function isPrime(num) {
  if (nun <=1) return false;
  for (let i = 2; i * i <= num; i++){
    if (num % i ===0) return false
  }
  return true;
}
console.log(isPrime(11)); // true
console.log(isPrime(15)); // false

 2. Reverse a string without using built-in reverse methods.
 function reverseString(str){
  let reversed = '';
  for(let i = str.length - 1; i>=0; i--){
    reversed +=str[i];
  }
  return reversed;
 }
 console.log(reverseString("hello")); 

 3. Find the factorial of a number using recursion
  fuction factorial(n) {
  if (n===0) return 1;
  return n* factorial(n-1);
}



 ## 4. Check if a string is a palindrome
function isPalindrome(str) {
  let reversed = str.split('').reverse().join('');
  return str === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
## 5. Generate the Fibonacci sequence up to n terms
function fibonacci(n) {
  let sequence = [0, 1];
  while (sequence.length < n) {
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
  }
  return sequence;
}

console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
## 6. Find the second largest number in an array
function secondLargest(arr) {
  let max = Math.max(...arr);
  arr = arr.filter(num => num !== max);
  return Math.max(...arr);
}

console.log(secondLargest([1, 2, 3, 4, 5])); // 4
## 7. Count the number of vowels in a string
function countVowels(str) {
  let vowels = 'aeiou';
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) count++;
  }
  return count;
}

console.log(countVowels("hello world")); // 3
## 8. Remove all duplicates from an array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
## 9. Sort an array without using the built-in sort() method
function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

console.log(sortArray([5, 2, 8, 1, 9])); // [1, 2, 5, 8, 9]
## 10. Find the sum of all numbers in an array that are divisible by 3 or 5
function sumDivisibleBy3Or5(arr) {
  return arr.reduce((sum, num) => num % 3 === 0 || num % 5 === 0 ? sum + num : sum, 0);
}

console.log(sumDivisibleBy3Or5([1, 2, 3, 4, 5, 6])); // 3 + 5 + 6 = 14
## 11. Check whether a given year is a leap year or not
function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

console.log(isLeapYear(2020)); // true
console.log(isLeapYear(2021)); // false
## 12. Count the number of words in a sentence
function countWords(sentence) {
  return sentence.trim().split(/\s+/).length;
}

console.log(countWords("hello world")); // 2



## 13. Find the GCD (Greatest Common Divisor) of two numbers
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

console.log(gcd(48, 18)); // 6
## 14. Find the longest word in a given string
function longestWord(str) {
  let words = str.split(' ');
  let longest = words[0];
  for (let word of words) {
    if (word.length > longest.length) longest = word;
  }
  return longest;
}

console.log(longestWord("I love programming")); // programming
## 15. Convert the first letter of each word in a sentence to uppercase
function capitalizeFirstLetter(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalizeFirstLetter("hello world")); // Hello World
## 16. Flatten a nested array
function flattenArray(arr) {
  return arr.reduce((flat, toFlatten) => {
    return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten);
  }, []);
}

console.log(flattenArray([1, [2, [3, 4], 5]])); // [1, 2, 3, 4, 5]
## 17. Check if two strings are anagrams
function areAnagrams(str1, str2) {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(areAnagrams("The Morse code is anagrams of Morse code")); // true
console.log(areAnagrams("hello", "world")); // false
## 18. Find the number of occurrences of a specific element in an array
function countOccurrences(arr, element) {
  return arr.filter(item => item === element).length;
}

console.log(countOccurrences([1, 2, 2, 3, 2], 2)); // 3
## 19. Shuffle the elements of an array (Fisher-Yates Shuffle)
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

console.log(shuffleArray([1, 2, 3, 4, 5]));
## 20. Remove all falsy values from an array
function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

console.log(removeFalsyValues([0, null, undefined, '', 'hello', true])); // ['hello', true]



Here are the solutions to the given problems:

## 1. Check if a number is prime or not
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(11)); // true
console.log(isPrime(15)); // false
## 2. Reverse a string without using built-in reverse methods
function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("hello")); // olleh
## 3. Find the factorial of a number using recursion
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
## 4. Check if a string is a palindrome
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
## 5. Generate the Fibonacci sequence up to n terms
function fibonacci(n) {
  let sequence = [0, 1];
  while (sequence.length < n) {
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
  }
  return sequence;
}

console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
## 6. Find the second largest number in an array
function secondLargest(arr) {
  let max = Math.max(...arr);
  arr = arr.filter(num => num !== max);
  return Math.max(...arr);
}

console.log(secondLargest([1, 2, 3, 4, 5])); // 4
## 7. Count the number of vowels in a string
function countVowels(str) {
  let vowels = 'aeiou';
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) count++;
  }
  return count;
}

console.log(countVowels("hello world")); // 3
## 8. Remove all duplicates from an array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
## 9. Sort an array without using the built-in sort() method
function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

console.log(sortArray([5, 2, 8, 1, 9])); // [1, 2, 5, 8, 9]
## 10. Find the sum of all numbers in an array that are divisible by 3 or 5
function sumDivisibleBy3Or5(arr) {
  return arr.reduce((sum, num) => (num % 3 === 0 || num % 5 === 0) ? sum + num : sum, 0);
}

console.log(sumDivisibleBy3Or5([1, 2, 3, 4, 5, 6])); // 3 + 5 + 6 = 14
## 11. Check whether a given year is a leap year or not
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(isLeapYear(2020)); // true
console.log(isLeapYear(2021)); // false

## 12. Count the number of words in a sentence
function countWords(sentence) {
  return sentence.trim().split(/\s+/).length;
}

console.log(countWords("hello world")); // 2
## 13. Find the GCD (Greatest Common Divisor) of two numbers
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

console.log(gcd(48, 18)); // 6
## 14. Find the longest word in a given string
function longestWord(str) {
  let words = str.split(' ');
  let longest = '';
  for (let word of words) {
    if (word.length > longest.length) longest = word;
  }
  return longest;
}

console.log(longestWord("I love programming")); // programming
## 15. Convert the first letter of each word in a sentence to uppercase
function capitalizeFirstLetter(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalizeFirstLetter("hello world")); // Hello World
## 16. Flatten a nested array
function flattenArray(arr) {
  return arr.flat(Infinity);
}

console.log(flattenArray([1, [2, [3, 4], 5]])); // [1, 2, 3, 4, 5]
## 17. Check if two strings are anagrams
function areAnagrams(str1, str2) {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false
## 18. Find the number of occurrences of a specific element in an array
function countOccurrences(arr, element) {
  return arr.filter(item => item === element).length;
}

console.log(countOccurrences([1, 2, 2, 3, 2], 2)); // 3
## 19. Shuffle the elements of an array (Fisher-Yates Shuffle)
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

console.log(shuffleArray([1, 2, 3, 4, 5]));
## 20. Remove all falsy values from an array
function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

console.log(removeFalsyValues([0, null, undefined, '', 'hello', true])); // ['hello', true]