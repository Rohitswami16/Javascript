
// const promiseOne = new Promise(function (resolve, reject) {
//     // Do an async task
//     // DB calls, cryptography, network

//     setTimeout(function () {
//         console.log("async task is complete");
//         resolve("Promise One");
//     }, 1000)
// })

// promiseOne.then(function () {
//     console.log("promise consumed")
// })


// new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log("Async task 2");
//         resolve("Promise Two");
//     }, 1000);
// }).then(() => {
//     console.log("Promise Two consumed");
// })


// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({ username: "chai", email: "chai@example.com" })
//     }, 1000);
// }).then((user) => {
//     console.log(`${user.username} ${user.email}`);
// })


// const promisefour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = false // flase ABC true ERROR
//         if (!error) {
//             resolve({ username: "ABC", pass: "123" })
//         } else {
//             reject('Error: some thing went wrong')
//         }
//     }, 1000)
// })

// promisefour.then((user) => {
//     console.log(user);
//     return user.username
// })
//     .then((myusername) => {
//         console.log(myusername);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("Finally executed");
//     })


// const promisefive = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true
//         if (!error) {
//             resolve({ username: "Javascript", pass: "123" })
//         } else {
//             reject('Error: JS thing went wrong')
//         }
//     }, 1000)
// })

// async function consumePromiseFive() {
//     try {
//         const response = await promisefive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()


// // async function getAllUsers() {
// //     try {
// //         const response = await fetch('https://api.github.com/users/Rohitswami16');
// //         // console.log(response);

// //         const data = await response.json()
// //         console.log(data);
// //     } catch (error) {
// //         console.log(error);
// //     }
// // }

// // getAllUsers()

// fetch('https://api.github.com/users/Rohitswami16')
//     .then((response) => {
//         response.json()
//     })
//     .then(data => {
//         console.log(data)
//     })
//     .catch((error) => console.log(error));




// const promiseone = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("task ended");
//         resolve();
//     }, 2000)
// })

// promiseone.then(function(){
//     console.log("promised consumed");
// })


// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("task ended");
//         resolve()
//     }, 2000)
// }).then(function () {
//     console.log("promised consumed");
// }).catch(function () {
//     console.log("error");
// }).finally(() => {
//     console.log("finally");
// });


// new Promise(function (resolve, reject) {

//     setTimeout(function () {
//         resolve({ name: 'kiran', emial: "kiran@gmail.com" })
//     }, 2000)
// }).then(function (us) {
//     console.log(us);
// })


// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true
//         if (error) {
//             resolve({ name: 'kiran', email: 'kiran@gmail.com' })
//         } else {
//             reject('error')
//         }
//     }, 2000)
// }).then(function (date) {
//     console.log(date);
//     return date.name
// }).then((n) => {
//     console.log(n);
// }).catch(function (e) {
//     console.log(e);
// }).finally(() => {
//     console.log('finally')
// })


// const pfive = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true
//         if (!error) {
//             resolve({ name: 'kiran', email: 'kiran@gmail.com' })
//         } else {
//             reject('error')
//         }
//     }, 1000)
// })

// async function consumefive(){
//     try{
//         const date = await pfive
//         console.log(date);
//     }catch{
//         console.log("erroe");
//     } 

// }

// consumefive()

// const promise = new Promise(function (resolve, reject) {
// setTimeout(function () {
//         let res = true
//         if (res) {
//             resolve({ name: 'kiran', email: 'kiran@gmail.com' })
//         } else {
//             reject("error")
//         }
//     }, 1000)
// })
// .then((date) => console.log(date))
// .catch(() => console.log("erroe"))
// .finally(() => console.log("finall"))

// const news = new Promise(function(resolve, reject){
//     setTimeout(() => {
//        const  res2 = true
//         if(res2){
//             resolve({name: 'kiran', email: 'kiran@gmail.com'})
//         } else {
//             reject("error")
//         }
//     }, 1000)
// })

// async function consume(){
//     try{
//         const date = await news
//         console.log(date);
//     } catch {
//         console.log("erroe")
//     }
// }

// consume()