class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static creatId() {
        return `123`
    }
}

const abc = new User("abc")
// console.log(abc.creatId());

class Teacher extends User {
    constructor(username, subject) {
        super(username);
        this.subject = subject;
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe()
// console.log( iphone.creatId())


