// const dog = {};
// console.log(dog);
// dog.name = "Jack";
// dog.legs = 4;
// dog.color = "black";
// dog.age = 5;
// dog.bark = function() {
//   return "woof woof";
// };

// cosole.log("Dog Name:", dog.name);
// console.log("Dog Legs:", dog.legs);
// console.log("Dog Color:", dog.color);
// console.log("Dog Age:", dog.age);
// console.log("Dog Bark:", dog.bark()); 
// dog.breed = "Golden Retriever";
// dog.getDogInfo = function() {
//   return `Name: ${this.name}, Breed: ${this.breed}, Age: ${this.age}, Color: ${this.color}, Legs: ${this.legs}`;
// };
// console.log("Dog Info:", dog.getDogInfo());

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}
for(let key in users) {
    let person = users[key]
    console.log(`${key} has ${person.skills.length} skills`)
}
