// Basic javascript

1. What are the different datatypes of javascript ??.
[i]Number [ii]String [iii]Boolean [iv]Undefined [v]Null [vi]



2. What is the difference betweeen let, var and const??
[i] Var : Function Scoped, can bbe redeclared and reused.
[iii] Const : Block Scoped, cant be updated nor declared.
[ii] Let : Block Scoped, can be updated but can not be redeclared.Block


3. What is hoisting in javascript.
variable should be defined before using.


4. Whats differ between == and === ?
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