const score = 400;
console.log(score); 
// Output: 400

const balance = new Number(100);
console.log(balance); 
// Output: [Number: 100]

console.log(balance.toString().length); 
// Output: 3 (since "100" has 3 characters)

console.log(balance.toFixed(2)); 
// Output: "100.00" (converts to string with 2 decimal places)

const otherNumber = 23.8666;

console.log(otherNumber.toPrecision(3)); 
// Output: "23.9" (rounds to 3 significant digits)

console.log(otherNumber.toPrecision(2)); 
// Output: "24" (rounds to 2 significant digits)

console.log(otherNumber.toPrecision(1)); 
// Output: "2e+1" (scientific notation for 20)

const hundreds = 10000000;

console.log(hundreds.toLocaleString('en-IN')); 
// Output: "1,00,00,000" (Indian numbering system)


// ********************** Maths **********************

console.log("\n");

console.log(Math); 
// Output: [Math Object] (prints the Math object with all methods)

console.log(Math.abs(-4)); 
// Output: 4 (absolute value)

console.log(Math.round(4.3)); 
// Output: 4 (rounds to nearest integer)

console.log(Math.max(100, 22, 200)); 
// Output: 200 (returns the highest number)

console.log(Math.min(100, 22, 200)); 
// Output: 22 (returns the lowest number)

console.log((Math.random() * 100).toPrecision(3)); 
// Output: Random number between 0-100 with 3 significant digits (e.g., "47.2", "6.53", "89.5")
