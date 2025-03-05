// for of

["", "", ""]

[{}, {}, {}]

const arr = [1, 2, 3, 4, 5]


for (const num of arr) {
    console.log(num);
}

const greeting = "hello world!"

for (const char of greeting) {
    if (char === " ") {
        continue
    }
    console.log(`Each char is ${char}`);
}


const map = new Map()

map.set("IN", "India")
map.set("US", "United States")
map.set("UK", "United Kingdom")
map.set("CA", "Canada")
map.set("AU", "Australia")

// for of map
for (const [key, value] of map) {
    console.log(key, " ", value);
}



const myObject = {
    'Game1': "NFS",
    'Game2': "FIFA",
    'Game3': "Mortal Kombat",
}

for (const key in myObject) {
    console.log(key, " ", myObject[key]);
}


const programming = ["js", "java", "python", "ruby"]

for (const key in programming) {
    console.log(programming[key]);
}


