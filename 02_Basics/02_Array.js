
const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros) 
// // [ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'flash', 'batman' ] ]

// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros)
// // [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'flash', 'batman' ]

// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros)


const anothere_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10, [11, 12]] ]

const realarray = anothere_array.flat(Infinity)
console.log(realarray);
// [ 1,  2, 3, 4,  5,  6,  7, 8, 9, 10, 11, 12 ]

console.log(Array.isArray("Kiran"));
// false

console.log(Array.from("kiran"));
// [ 'K', 'i', 'r', 'a', 'n' ]

console.log(Array.from({name: "Kiran"})); // Intersting
// []


let score1 = 100;
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
// [ 100, 200, 300 ]


