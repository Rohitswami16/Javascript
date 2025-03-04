// simple for loops

for (let i = 0; i < 10; i++) {
    console.log(i);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8]

for (let j = 0; j < arr.length; j++) {

    console.log(arr[j])
}


for (let i = 0; i < 10; i++) {
    console.log(`outer lopp ${i}`)
    for (let j = 0; j < 5; j++) {
        console.log(`inner lopp ${i}   ${j}`)
    }
}


let myarray = [1, 2, 4, 5, 6, 7, 8, 10]

for (let k = 0; k < myarray.length; k++) {
    const element = myarray[k];
}


// break continue 

for (let j = 0; j < 10; j++) {
    console.log(j);
    
    if (j == 5) {
        break;
    }
}


for (let j = 0; j < 10; j++) {
    
    
    if (j == 5) {
        continue;
    }
    console.log(j);
}