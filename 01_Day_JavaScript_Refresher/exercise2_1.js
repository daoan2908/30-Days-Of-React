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
const mernskills = ['MongoDB', 'Express', 'React', 'Node']
const people = Object.values(users).filter(user => mernskills.every(skill => user.skills.includes(skill)))
console.log(people)

const newuser = {
  An: {
    email: 'daoan2908@gmail.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 21,
    isLoggedIn: false,
    points: 10
  }
}
const users2 = Object.assign( users, newuser)
console.log(users2)

const keys = Object.keys(users)
console.log(keys)

const values = Object.values(users)
console.log(values)
