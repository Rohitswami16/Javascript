// Singleton
// Creat object


// object literals

const mySys = Symbol("Key1")

const jsuser = {
    name: 'John',
    "fullname": 'Jhon Paul',
    [mySys]: "mykey1", // interview 
    age: 30,
    city: 'New York',
    email: "jhon@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monaday", "Saturdaya"]
}

console.log(jsuser.name);
console.log(jsuser["email"])
console.log(jsuser['fullname'])
console.log(jsuser[mySys]);  // interview

jsuser.email = "jhonoaul@gmail";
Object.freeze(jsuser)
jsuser.isLoggedIn = true; // it will  not chenge

jsuser.greeting = function () {
    console.log("hello js user");
}

jsuser.greetingTwo = function () {
    console.log(`hello js user ${this.fullname}`);
}

console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());

