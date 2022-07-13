// // ES6 Array Spreading
// // ... spreads all the elements in the array

// const fruits = ["apple", "orange", "grape"];
// const veggies = ["cucumber", "potato"];

// // combines all the elements together
// const combined = [...fruits, ...veggies];
// console.log(combined);

// //Javascript Objects, Properties and Methods

// const developer = {
//   salary: 100000,
//   experience: 1,
//   techStack: ["vue", "html", "css"],
//   lookingForWork: true,
//   doubleSalary() {
//     this.salary = this.salary * 2;
//     this.lookingForWork = false;
//   },
// };
// console.log(developer.salary);
// console.log(developer.lookingForWork);

// developer.doubleSalary();
// console.log(developer.salary);
// console.log(developer.lookingForWork);

// // Working with Tests
// export const evenOrOdd = (number) => {
//   if (number % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// };

// export const multiply = (num1, num2) => {
//   // let total = 0;
//   // for (let i = 0; i < num1; i++) {
//   //   total += num2;
//   // }
//   // return total;
//   return num1 * num2;
// };

// Map Method
const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map((number) => {
  return number * number;
});
console.log(squares);
