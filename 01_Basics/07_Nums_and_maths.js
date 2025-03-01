const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.8666

console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(2));
console.log(otherNumber.toPrecision(1));

const hundreds = 10000000


console.log(hundreds.toLocaleString('en-IN'));


// ********************** Maths **********************

console.log("\n");

console.log(Math);

console.log(Math.abs(-4));

console.log(Math.round(4.3));

console.log(Math.max(100, 22,200));
console.log(Math.min(100, 22,200));
console.log( (Math.random()*100).toPrecision(3))


