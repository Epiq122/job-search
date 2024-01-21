const fruits = ['apple', 'orange', 'banana', 'grapes', 'mango', 'kiwi']
const vegetables = ['potato', 'tomato', 'onion', 'cabbage', 'cauliflower', 'broccoli']
const items = [...fruits, vegetables] // spread operator
const allItems = [...fruits, ...vegetables] // spread operator

console.log(items)
console.log(allItems)
