// // Array

const myArr = [0, 1, 2, 3, 4, 5, 6]
const myHeroes = ["Spider", "Batman", ""]

console.log(myArr[0]);

// interview 

//  shallow copy  :- Properties will share the same references  (heap reference)
//  deep copy :- Properties will have their own references (different heap reference)


// Array Methods
// 1. push() :- adds one or more elements to the end of an array and returns

myArr.push(6)
myArr.push(7)
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(9)
console.log(myArr);

myArr.shift()
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(4));
console.log(myArr.lastIndexOf(4));

const nearr = myArr.join()

console.log(myArr);
console.log(nearr);

// Slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)
console.log(myn1);


console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);


