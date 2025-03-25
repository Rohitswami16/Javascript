console.log(2 > 1);   // true
console.log(2 >= 1);  // true
console.log(2 < 1);   // false
console.log(2 == 1);  // false
console.log(2 != 1);  // true


console.log(null > 0);   // false
console.log(null < 0);   // false
console.log(null == 0);  // false
console.log(null >= 0);  // true

console.log(undefined == 0);  // false
console.log(undefined > 0);   // false
console.log(undefined < 0);   // false

console.log("2" === 2);

// 1️⃣ Comparisons (<, >, <=, >=) convert null to 0 but NOT undefined.
// 2️⃣ Equality (==) does NOT convert null or undefined to numbers.
// 3️⃣ undefined is never equal to any number, not even 0.