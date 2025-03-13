class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course has been added ${this.username}`);
    }
}

const chai = new Teacher("chai", "def@gmail.com", "999")
chai.addCourse()

const masalChai = new Teacher("masalaChai", "masalchai@gmail.com", "masala")
masalChai.addCourse()

console.log(chai instanceof Teacher);

console.log(chai instanceof User);


