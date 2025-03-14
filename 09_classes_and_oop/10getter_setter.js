class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email.toUpperCase();
    }

    set email(email){
        this._email = email
    }

    set password(password){
        this._password = password;
    }

    get password() {
        return this._password.toUpperCase()
    }
}

const hitest = new User("h@hitesh.ai", "abc")
console.log(hitest._password);
console.log(hitest._email);

