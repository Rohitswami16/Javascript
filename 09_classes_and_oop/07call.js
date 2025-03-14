function SetUserName(username) {
    // it will set to the oen this (SetUserName)
    this.username = username
    console.log("callled");
    
}

function creatUser(username, email, password){
    SetUserName.call(this, username) // it will hold the reference 
    this.email = email
    this.password = password
}

const chai = new creatUser("abc", 'chai@gmail.com', '123')
console.log(chai);

