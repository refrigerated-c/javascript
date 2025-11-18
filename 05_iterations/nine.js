//reduce

const myNums = [1,2,3]
// const myTotal = myNums.reduce( function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval

// } , 0)

//through arrow function
const myTotal = myNums.reduce( (acc,currval) => acc + currval,0 )
console.log(myTotal);

const shoppingCart = [
    {
        itemName: 'Sauces & Dips',
        price: 299
    },
    {
        itemName: 'Cheese',
        price: 354
    },
    {
        itemName: 'Breads & Cakes',
        price: 590
    },


]

const totalBill = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )
console.log(totalBill);
