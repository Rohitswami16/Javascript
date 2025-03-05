// Reduce 

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const total = myNums.reduce( function (acc, currval) {
   console.log(`acc: ${acc}, currval: ${currval}`);
    return acc + currval

}, 10 )

console.log(total);

const myTotal = myNums.reduce( (acc, curr)=> acc+curr, 0)
console.log(myTotal);


const shoppingCart = [
    {
        name: 'Apple',
        price: 1.00

    },
    {
        name: 'Banana',
        price: 0.50
    },
    {
        name: 'Orange',
        price: 1.50
    },
    {
        name: 'Grapes',
        price: 2.00
    },
    {
        name: 'Mango',
        price: 3.60
    }
]

const priceTotal = shoppingCart.reduce( (acc, item)=> acc + item.price, 0)
console.log(priceTotal);