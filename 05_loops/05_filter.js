// filter

const programming = ["js", "java", "python", "ruby", "cpp"]

// const values = programming.forEach( (item) => {
//     console.log(item);
//     return item
// })

// console.log(values);

// the above code will not work


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter((num) => {
    return num > 5
})

console.log(newNums);


const evenNums = myNums.filter((num) => num % 2 == 0)
console.log(evenNums);

const oddNums = myNums.filter((num) => (num % 2 != 0))
console.log(oddNums);

const smallnums5 = myNums.filter((num) => num < 5)
console.log(smallnums5);

const books = [
    {
        title: "Book one", genre: 'Fiction', publish: 1981, edition: 2004
    },
    {
        title: "Book two", genre: 'Non Fiction', publish: 1990, edition: 2008
    },
    {
        title: "Book three", genre: 'history', publish: 1996, edition: 2013
    },
    {
        title: "Book four", genre: 'Fiction', publish: 2002, edition: 2009
    },
    {
        title: "Book five", genre: 'Non Fiction', publish: 2009, edition: 2011
    }
]


let userBooks = books.filter((bk) => bk.genre === 'Fiction')
// console.log(userBooks);

userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === 'Fiction'
})
console.log(userBooks);


