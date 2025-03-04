

let a = 300

if (true) {

    let a = 10
    const b = 20
    console.log("inner: ", a);
}


console.log(a);

function one() {
    const user = "Mohan"

    function two() {
        const website = "youtube"
        console.log(user);
    }

    
    console.log(website);
    two()
   
}

one()



if (true) {
    const name = "Sam"

    if ( name === "Sam") {
        const age = "22"
        console.log(name+" "+age);
    }
    console.log(age);
}

console.log(name);


// ******************** intersting **************


AddOne(5)
console.log(AddOne(5));

function AddOne(num) {
    return num + 1;
}


console.log(addtwo(6));

const addtwo = function(num) {
    return num + 2;
}

