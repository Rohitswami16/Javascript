// Primitive
// 7 types : String, Number, Boolean, undefined, null, Symbol, BigInt

const score = 100   // int
const name = "John" // STring
const isAdmin = true //boolean
const isAdmin2 = false  //boolean
const isAdmin3 = null    // empty
let isAdmin4;          // undefined         
const isAdmin5 = Symbol("isAdmin")  // Unique

const id = Symbol('123')
const anid = Symbol('123')

console.log(id === anid) // false

// Non Primitive (Reference)
// Array, Objects, function 

const heros = ['Shaktiman', 'naagraj', 'doga']

let myobj = {
    name: "kiran",
    age: 22,
}

const myfunction = function() {
    console.log("hello world")
}

console.log(typeof myfunction);  // function

// ********************************************************

// Stack (primitive), Heap (non primitive)

let firstName = "Kirankumar"

let secondName = firstName

console.log(firstName);
console.log(secondName);

secondName = "Mohan"
console.log(secondName);

let userOne = {
    name: "kiran",
    age: 22,
}

let usertwo = userOne

console.log(userOne);
console.log(usertwo);

usertwo.name = 'Mohan'
console.log(usertwo);
console.log(userOne);

/* 
✔ Primitive types are stored in Stack (copied).
✔ Non-primitive types are stored in Heap (reference shared).
✔ Use const for objects/arrays to prevent reference reassignment.
✔ Symbols (Symbol()) are always unique.
✔ To avoid unwanted mutations, use Object.assign() or spread (...) for copying objects.
*/


/* 
Shallow Copy vs. Deep Copy in JavaScript
1️⃣ What is a Shallow Copy?
A shallow copy creates a new object but only copies the top-level properties. If the original object contains nested objects, the reference to those nested objects is copied, not the actual values.

🔹 Changes in the nested object of the copied object affect the original object ❗

2️⃣ What is a Deep Copy?
A deep copy creates a completely independent clone of an object, including its nested objects. Changes to the copied object do not affect the original object.

🔹 Every level of the object is copied separately.



6️⃣ Summary: When to Use Shallow or Deep Copy?
✔ Use shallow copy if your object is simple and does not contain nested objects.
✔ Use deep copy when working with nested objects to prevent unintended modifications.
✔ Use structuredClone() or Lodash (_.cloneDeep) for the best deep copy results.

Let me know if you need more details! 🚀
*/