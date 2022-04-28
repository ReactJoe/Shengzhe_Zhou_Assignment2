//Q1

const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
]
// Given the array, implement a function for enerating a new array which doubles the quantity and price in each object.
let question1 = itemsObject.map((item) => {
  let obj = { ...item }
  //   console.log(obj)
  obj.quantity *= 2
  obj.price *= 2
  return obj
})
console.log(question1)
console.log(itemsObject)
// Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.

let question2 = itemsObject.filter((item) => {
  return item.quantity > 2 && item.price > 300
})
console.log(question2)

//Given the array, implement a function to calculate the total value of the items.
let sum = 0
itemsObject.forEach((item) => {
  sum = sum + item.quantity * item.price
})
console.log(sum)

//Q2
const string = `  Perhaps The Easiest-to-understand  Case  For Reduce Is     To Return
The  Sum  Of  All  The Elements In An Array  `
//Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.
let re = string
  .trim()
  .split(' ')
  .filter((item) => item)
  .join(' ')
  .toLowerCase()
console.log(re)
