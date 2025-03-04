// const tinderUser = new Object() // singleton object
const tinderUser = {} // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "John Doe"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    email: "Jhon@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Kiran",
            lastname: "kumar"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 3: "d" }
const obj3 = { 5: "e", 6: "f" }
const obj4 = { 7: "g", 8: "h" }

// const obj3 = { obj1, obj2 } 
// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'd' } }

const obj5 = Object.assign({} , obj1, obj2, obj3, obj4)
// console.log(obj5);
// { '1': 'a', '2': 'b',  '3': 'd','5': 'e', '6': 'f', '7': 'g',   '8': 'h' }


const obj6= {...obj1, ...obj2, ...obj3, ...obj4}
console.log(obj6);
// { '1': 'a', '2': 'b',  '3': 'd','5': 'e', '6': 'f', '7': 'g',   '8': 'h' }


// const users = {
//     {
//         id: 1
//         email: "Kiran@gmail.com"
//     }
//     {
//         id: 2
//         email: "Kiran@gmail.com"
//     }
// }

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "Js in hindi",
    price: "999",
    courseInstructor: "Kiarn"
}

const {courseInstructor} = course
console.log(courseInstructor);

const {price: p} = course
console.log(p);


// API 

// json 
{
    name: "mohan",
    age: 19
}



// ARRAY 
[
   {},
   {},
   {}
]