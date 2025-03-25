let myDate = new Date();
console.log(myDate); 
// Output: Tue Mar 25 2025 18:04:56 GMT+0530 (India Standard Time) (varies)

console.log(myDate.toString()); 
// Output: "Tue Mar 25 2025 18:04:56 GMT+0530 (India Standard Time)" (varies)

console.log(myDate.toDateString()); 
// Output: "Tue Mar 25 2025"

console.log(myDate.toLocaleString()); 
// Output: "3/25/2025, 6:04:56 PM" (varies by locale)

console.log(typeof myDate); 
// Output: "object"

let myTimeStamp = Date.now();
console.log(myTimeStamp); 
// Output: 1743104696789 (varies, represents milliseconds since Unix Epoch)

console.log(Math.floor(Date.now()/1000)); 
// Output: 1743104696 (varies, represents seconds since Unix Epoch)
