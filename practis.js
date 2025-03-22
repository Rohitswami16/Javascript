
// // function abc() {
// //     console.log(abc.xyz);
// // }

// // abc()   // undinfined
// // abc.xyz = 100
// // abc.xyz = 200
// // abc()   // 200

// // const nums = [1, 2, 3, 4]
// // nums[100] = 2000       

// // console.log(nums);        // 1 2 3 4 5<empty> ... 99 200

// // console.log(typeof typeof 100);
// // const arr = [...'Kiran', ..."kumar",, ""]
// // console.log(arr);

// // console.log(parseInt("10*2"))
// // console.log(parseInt("7FM"))
// // console.log(isNaN(parseInt("M7F")))

// // pure function 

// function add(a, b) {
//     return a + b
// }

// console.log(add(5, 2));
// console.log(add(5, 2));

// // impure functio

// let s = 0;

// function sum(value) {
//     s += value
//     return s
// }

// console.log(sum(2))
// console.log(sum(2));


// function addcarry(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c
//         }
//     }
// }

// console.log(addcarry(2)(3)(4))


// const res = (a)=> (b) => (c) => a+b+c
// console.log(res(1)(1)(1))


// var a =200

// {
//     var a = 400

// }

// let b = a

// {
//     b = -400
// }

// console.log(b);
// console.log(a);


// template literal

// const age = 20

// console.log(`my age is ${age}`);

// arr = ['a', 'b', 'c', 'd', 'a', 'a']

// console.log(arr.indexOf('a', -1));

// const arr = ['a','c' , 'q', 'f', 'e']
// // const arr = [2, 100, 8, 150]

// console.log(arr.sort((a,b)=> a-b))
// console.log(arr.sort((b,a)=> a-b))
// console.log(arr.sort());

// const arr = [
//     [1, 2],
//     [3, 4],
//     [5, 6],
//     [7, 8],
//     [9, 10],
// ]

// const arr1 = [,,,]
// console.log(arr.length);

// console.log(arr1.length);

// -------------------------------

// const arr = [{ name: "kiran", rno: 2 },
// { name: "mohan", rno: 3 },
// { name: "manju", rno: 4 },
// { name: "kiran", rno: 2 },
// ]

// const fillteredArray =arr.filter( (person) => person.rno === 4 )
// console.log(fillteredArray);


const arr = [1, 2, 3, 4];

// for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index])
// }

// arr.forEach((num)=> console.log(num))

// const newarr = arr.map((num) => num * 2)
// console.log(newarr)

// console.log(arr.filter((num) => num % 2 == 0))

// console.log(arr.reduce((acc, num)=> acc+num));


// for (let [key, value] of arr.entries()) {
//     console.log(`${key} ${value}`);
// }

// console.log(arr.map((num) => num * 10))
// console.log(arr.filter((num)=> num%2!==0));
// console.log(arr.reduce((acc, num) => acc +num ));
// arr.forEach(element => {
//     console.log(element);
// });

// for(let key of arr.keys()){
//     console.log(key);
// }

// for(let value of arr.values()){
//     console.log(value);
// }

// for(let [key, value] of arr.entries()){
//     console.log(`${key} ${value}`);
// }


// const addthree = (a) => (b) => (c) => a+b+c 
// const add = addthree(10)(20)(30)
// console.log(add);

// const addnew = function (a){
//     return function(b) {
//         return function(c) {
//             return a+b+c
//         }
//     }
// }

// console.log(addnew(1)(1)(1));

// console.log([] == []);
// console.log([] === []);

// const arr1 = []
// const arr2 = arr1

// console.log(arr1 == arr2);
// console.log(arr1 === arr2);

// console.log(typeof[]);

// const fetchData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Data fetched");
//     }, 2000);
// });

// fetchData.then((data) => console.log(data));


// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data fetched");
//             resolve("Success");
//         }, 5000);
//     });
// }

// fetchData()
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));


// const arr1 = [1, 2, 1, 2, 3, 4, 4, 5, 6, 7, 8];

// function sorted(arr1) {
//     return arr1.sort((a, b) => a - b);
// }

// console.log(arr1);


const arr1 = [1, 2, 3,]
const arr2 = [4, 5, 6,]

const merge = [...arr1, ...arr2]
console.log(merge);
 

function sum(...numbers){
return numbers.reduce
}