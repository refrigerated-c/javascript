// const char = ["Cemre", "Emir", "Feliz", "Kerim"]

// const value= char.forEach((item) => {
//     //console.log(item);
//     return item
// });

// console.log(value);
// //will print undefined too
//So what to do if we want to save that value and use for other thing too?

 const myNums =[1,2,3,4,5,6,7,,8,9,10]

// const newNum= myNums.filter(num => 
//      num > 4
    
// );
// console.log(newNum);

// const newNum= myNums.filter(num => {
//      return num > 4

// }
//      //Remember if using {}'scopes' then use retuen keyword too
    
// );
// console.log(newNum);

//if want to use forEach

const newNums = []

myNums.forEach( (num)=> {
     if (num > 4 ) {
          newNums.push(num)
     }
} )
//console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//  const userBooks = books.filter( (bk) => bk.genre === 'Non-Fiction' ) 
//  console.log(userBooks);
 
const userBooks = books.filter( (bk) => { return bk.publish > 1995 && bk.genre === 'History'})
 console.log(userBooks);