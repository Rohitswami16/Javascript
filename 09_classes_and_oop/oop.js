const user = {
    name: "John",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log("got user deatils");
        // console.log(`username: ${this.name}`);
        // console.log(this);
    }
}

// console.log(this); // {}
// user.getUserDetails()
// const promiseOne = new Promise()


function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        console.log(`Hello, ${this.username}!`)
    }
}

const userOne = new User("ABC", 12, true)
const userTwo = new User("DEF", 11, false)
console.log(userOne);

console.log(userTwo);
this.greeting()



