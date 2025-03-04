
const user = {
    username: "Mohan",
    price: 999,

    wellcomMessage: function () {
        // console.log(`${this.username}, wellcome to website.`);
        // console.log(this);
    }
}

user.wellcomMessage()

user.username = "sam"
user.wellcomMessage()

console.log(this);




function chai() {
    let username = "rohit"
    console.log(this.username);
}

chai()
// undefined

const chai1 = function () {
    let username = "rohit"
    console.log(this.username);
}
chai1()
// undefined


const chai2 =  () => {
    let username = "rohit"
    console.log(this);
}

chai2()
// {}


const addTwo = (num1, num2) => { 
    return num1+num2 
}

console.log(addTwo(10, 20));
console.log(addTwo(10, 20));

const addTwo1 = (num1, num2) => num1+num2
console.log(addTwo1(10, 20));

const addTwo2 = (num1, num2) => (num1+num2)
console.log(addTwo2(10, 20));


const addTwo3 = (num1, num2) => ({ username: "Rohit" })
console.log(addTwo3(10, 20));



