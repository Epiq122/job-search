// ES6 Array Spreading
// ... spreads all the elements in the array

const fruits = ["apple", "orange", "grape"];
const veggies = ["cucumber", "potato"];

// combines all the elements together
const combined = [...fruits, ...veggies];
console.log(combined);

//Javascript Objects, Properties and Methods

const developer = {
  salary: 100000,
  experience: 1,
  techStack: ["vue", "html", "css"],
  lookingForWork: true,
  doubleSalary() {
    this.salary = this.salary * 2;
    this.lookingForWork = false;
  },
};
console.log(developer.salary);
console.log(developer.lookingForWork);

developer.doubleSalary();
console.log(developer.salary);
console.log(developer.lookingForWork);
