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

console.log(id === anid)


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

console.log(typeof myfunction);


// ************************** 

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
