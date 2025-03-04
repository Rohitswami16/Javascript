// if 

const isUserLoggedIn = true

if (isUserLoggedIn) {
    console.log("wellcome");

}

// <, > , <=, >=, ==, !=, ===

if(2 === "2") {
    console.log("true");
}


// if else 

const temp = 41

if (temp < 50) {
    console.log("less than 50");
} else {
    console.log("more than 50");
}


const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`user power ${power}`);
}


const balance = 1000

if (balance >= 500) console.log("test");

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 1000");
} else {
    console.log("more than 1000");
}


const UserLoggedIn = true
const debitcard = true
const loggedfromemail = false
const loggedfromgoogle = true

if (UserLoggedIn && debitcard) {
    console.log("user logged in and debit card is available");
} 

if (loggedfromemail || loggedfromgoogle) {
    console.log("user logged in from email or google");
}