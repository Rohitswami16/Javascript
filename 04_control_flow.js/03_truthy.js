const useremail = "kiran@gmail.com"

if(useremail) {
    console.log("Email is valid")
} else {
    console.log("Email is not valid")
}

// false

// false
// ""
// 0
// -0
// BIGINT 0n
// null
// undefined
// NaN

// truthy

// "0"
// " "
// "false"
// "null"
// "undefined"
// []
// {}
// [1, 2, 3]
// {a: 1, b: 2}
// function() {}

const ar = []
if (Array.length ===0) {
    console.log("Array is empty")
} else {
    console.log("Array is not empty")
}


const ob = {}

if(Object.keys(ob).length === 0) {
    console.log("Object is empty")
} else {
    console.log("Object is not empty")
}

// Nullish Coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10

val1 = null ?? 10

val2 = undefined ?? 15

console.log(val1);
console.log(val2);

// turniary operator

// condition ? true : false


const icePrice = 100

icePrice > 80 ? console.log("more than 80") : console.log("less than 80")
