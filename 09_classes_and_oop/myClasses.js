// ES6 

class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    chengeUserName(){
        return `${this.username.toUpperCase()}`
    }
}


const chai = new User("chai", "chai@gmail.com", "123")
console.log(chai);
console.log(chai.encryptPassword());
console.log(chai.chengeUserName());

// behind the scence

function newUser(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}   

newUser.prototype.encryptPassword = function() {
    return `${this.password}abc`
}

newUser.prototype.chengeUserName = function() {
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", 'tea@gmail.com', "123")
console.log(tea);
console.log(tea.encryptPassword());
console.log(tea.chengeUserName());