const programming = ["js", "java", "python", "ruby", "cpp"]

// programming.forEach( function (item) {
//     console.log(item)
// })


// programming.forEach ( (i)=> {
//     console.log(i)
// })

// function printMe(i) {
//     console.log(i)
// }

// programming.forEach(printMe)

// programming.forEach( (item, index, arr) => {
//     console.log(item, index, arr)
// })


const myCoding = [
    {
        languageName: "Javascript",
        languageLevel: "Beginner"
    },
    {
        languageName: "Python",
        languageLevel: "Intermediate"
    },
    {
        languageName: "Java",
        languageLevel: "Advanced"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
    console.log(item.languageLevel);
})
