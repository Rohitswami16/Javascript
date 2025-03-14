// let myName = "ABC"

// console.log(myName.trueLength);

let myHeros = ['thor', 'spiderman']

let heroPower = {
    thor: 'hammer',
    spiderman: 'web',
 
    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.hitesh = function(){
    console.log("Hitesh is a good boy");
}

Array.prototype.heyHitesh = function(){
    console.log("Hey Hitesh");
}

myHeros.heyHitesh()
// heroPower.heyHitesh()


// inheritance


const User = {
    name: 'John',
    age: 30,
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'Js assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// Modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "ChaiAurCode           "

String.prototype.trueLength = function() {
    console.log(`True length is: ${this.trim().length}`);
    console.log(this);
}

anotherUsername.trueLength()