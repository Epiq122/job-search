const fruits = ['apple', 'orange', 'banana', 'grapes', 'mango', 'kiwi'];
// spread operator

const vegetables = ['potato', 'tomato', 'onion', 'cabbage', 'cauliflower', 'broccoli'];
const items = [...fruits, vegetables]; // spread operator
const allItems = [...fruits, ...vegetables]; // spread operator

console.log(items);
console.log(allItems);
console.log('---------------------');
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
