let score = "33"
console.log(typeof score)

let valueNumber = Number(score)

console.log(typeof valueNumber)


//  "33" => 33
// "33abc" => NaN  type is Number but it is not a number
// true => 1 or false => 0
// 

let isLoggedIn = 1
console.log(Boolean(isLoggedIn)) // 1

// 1 => true 0=> false
// "" => false 
// "abc" => true

let someNumber = 33

let stringNumber = String(someNumber)

console.log(stringNumber)
console.log(typeof stringNumber)


// ****************** Operations **********************


let value = 3

let negvalue = -value
console.log(negvalue)

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
// 2/0 => NaN (Not a Number)
console.log(2/0)
// 2/0 => Infinity
console.log(2/0)
// 2/0 => -Infinity
console.log(2%7)
// 2 % 7 = 2

let str1 = "Kiran"
let str2 = "Kumar"

let str3 = str1 + str2
console.log(str3)


console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

console.log(+true) // 1
console.log(+"") // 0

let num1, num2, num3

num1 = 5
num2 = ++num1
console.log(num2)  // 6

n1 = 5
num3 = n1++
console.log(num3) // 5