

function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

sayMyName()
sayMyName()

// will not return just print
function addTwoNumber(num1, num2) {
    console.log( num1+num2)
}

const res = addTwoNumber(10, 20);
console.log(res);


// return the result 

function addTwoNumber11(num1, num2) {
   return num1+num2
}

const res1 = addTwoNumber11(50, 70);
console.log(res1);


function loginUserMessage(username = "Sam" ) {

    if(!username){
        console.log(`plase enter username`)
        return
    }
    return `${username} just logged in` 
}

console.log("\n", loginUserMessage())
console.log("\n", loginUserMessage("John"))



// when we dont know how many element will come to add

function calculateCartPrice(...num1) {
    return num1
}


console.log(calculateCartPrice(200, 400, 600, 900, 1000, 1100));


const user = {
    name: "John",
    price: 199
}

function handleObject(anyObject) {
    console.log(`name is : ${anyObject.name} and price is ${anyObject.price}`);

}

handleObject(user)

handleObject( {
    name: "Sam",
    price: 399
})


// Array 
const mynewarray = [200, 300, 400, 500]

function returnvlaue(getArray) {
    return getArray[0]
}

console.log(returnvlaue(mynewarray));
