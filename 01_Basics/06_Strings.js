const name = "hitesh"
const repoCount = 50

// console.log(name+repoCount);

// String Interpolation
console.log(`hello my name ${name} and my repo count ${repoCount}`);

const gameName = "Kiranhc"

// console.log(gameName[0]);
console.log(gameName.toUpperCase);
console.log(gameName)
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));
console.log(gameName.__proto__);











// JavaScript String Methods with Notes

let str = "  JavaScript is Awesome!  ";

// 1️⃣ Length of a string
console.log(str.length); // 25

// 2️⃣ Convert to uppercase
console.log(str.toUpperCase()); // "  JAVASCRIPT IS AWESOME!  "

// 3️⃣ Convert to lowercase
console.log(str.toLowerCase()); // "  javascript is awesome!  "

// 4️⃣ Remove whitespace from both ends
console.log(str.trim()); // "JavaScript is Awesome!"

// 5️⃣ Remove whitespace from the start
console.log(str.trimStart()); // "JavaScript is Awesome!  "

// 6️⃣ Remove whitespace from the end
console.log(str.trimEnd()); // "  JavaScript is Awesome!"

// 7️⃣ Find the character at a specific index
console.log(str.charAt(2)); // "J"

// 8️⃣ Find the ASCII code of a character at a specific index
console.log(str.charCodeAt(2)); // 74 (ASCII of 'J')

// 9️⃣ Find the first occurrence index of a substring
console.log(str.indexOf("is")); // 13

// 🔟 Find the last occurrence index of a substring
console.log(str.lastIndexOf("a")); // 15

// 1️⃣1️⃣ Check if a string contains a specific word
console.log(str.includes("Awesome")); // true

// 1️⃣2️⃣ Check if a string starts with a specific word
console.log(str.startsWith("Java")); // false (due to whitespace)
console.log(str.trim().startsWith("Java")); // true

// 1️⃣3️⃣ Check if a string ends with a specific word
console.log(str.endsWith("Awesome!  ")); // true
console.log(str.trim().endsWith("Awesome!")); // true

// 1️⃣4️⃣ Extract a part of a string using slice(start, end)
console.log(str.slice(2, 11)); // "JavaScript"
console.log(str.slice(-8)); // "Awesome!  "

// 1️⃣5️⃣ Extract a substring using substring(start, end) (does not support negative indexes)
console.log(str.substring(2, 11)); // "JavaScript"

// 1️⃣6️⃣ Extract a substring using substr(start, length) (deprecated but still works)
console.log(str.substr(2, 10)); // "JavaScript"

// 1️⃣7️⃣ Replace a specific word in a string
console.log(str.replace("Awesome", "Great")); // "  JavaScript is Great!  "

// 1️⃣8️⃣ Replace all occurrences of a word
console.log("apple apple apple".replaceAll("apple", "orange")); // "orange orange orange"

// 1️⃣9️⃣ Split a string into an array based on a delimiter
console.log(str.split(" ")); // ["", "", "JavaScript", "is", "Awesome!", "", ""]

// 2️⃣0️⃣ Repeat a string multiple times
console.log("Hi! ".repeat(3)); // "Hi! Hi! Hi! "

// 2️⃣1️⃣ Pad a string at the start to reach a specific length
console.log("5".padStart(4, "0")); // "0005"

// 2️⃣2️⃣ Pad a string at the end to reach a specific length
console.log("5".padEnd(4, "0")); // "5000"

// 2️⃣3️⃣ Convert a number to a string
let num = 42;
console.log(num.toString()); // "42"

// 2️⃣4️⃣ Find the primitive value of a string
console.log(str.valueOf()); // "  JavaScript is Awesome!  "

// 2️⃣5️⃣ Concatenate two strings
let str1 = "Hello";
let str2 = " World";
console.log(str1.concat(str2)); // "Hello World"

// 2️⃣6️⃣ Extracting parts of a string using splice (not valid for strings, works on arrays)
let arr = ["JavaScript", "is", "Awesome"];
arr.splice(1, 1, "Super"); // Removes "is" and adds "Super"
console.log(arr); // ["JavaScript", "Super", "Awesome"]

// 2️⃣7️⃣ Extracting parts of a string using slice (works on strings)
console.log(str.slice(2, 11)); // "JavaScript"

// 2️⃣8️⃣ Accessing string prototype methods
console.log(str.__proto__); // Shows all string prototype methods
