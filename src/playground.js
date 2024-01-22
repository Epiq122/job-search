const fruits = ['apple', 'orange', 'banana', 'grapes', 'mango', 'kiwi'];
// spread operator

const vegetables = ['potato', 'tomato', 'onion', 'cabbage', 'cauliflower', 'broccoli'];
const items = [...fruits, vegetables]; // spread operator
const allItems = [...fruits, ...vegetables]; // spread operator

console.log(items);
console.log(allItems);
console.log('--------TESTS-------------');
// objects properties and methods
const developer = {
  salary: 100000,
  experience: 4.5,
  techStack: ['React', 'Node', 'MongoDB', 'Express'],
  lookingForWork: true,
  doubleSalary() {
    return this.salary * 2;
  }
};

console.log(developer.salary);
console.log(developer.experience);
console.log(developer.techStack);
console.log(developer.lookingForWork);
console.log(developer.doubleSalary());

console.log('---------------------');

export const evenOrOdd = (num) => {
  if (num % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
};

export const multiply = (num1, num2) => num1 * num2;

console.log('--------MAP-------------');
const numbers = [1, 2, 3, 4, 5];
const double = numbers.map((number) => number * 2);
console.log(double);

const square = numbers.map((number) => number * number);
console.log(square);

const people = ['John', 'Jill', 'Jack', 'James', 'Jenny'];
const upperCase = people.map((person) => person.toUpperCase());
console.log(upperCase);
