// let age = Number(prompt('Enter your age'))
// if(age >= 18) {
//     console.log('You are old enough to drive.')
// }
// else {
//     let x = 18 - age
//    console.log(`You are left with ${x} years to drive.`)
// }

// let myage = 21
// let yourage = Number(prompt('Enter your age'))
// if (yourage > myage ) {
//     console.log(`You are ${yourage-myage} years older than me.`)
// }
// else {
//     console.log("mmmmm")
// }

// let score =  Number(prompt('Enter your score'))
// if(0<= score && score<= 49) {
//     console.log("F")
// }
// else if(50<= score && score<= 59){
//     console.log("D")
// }
// else if(60<= score && score<= 69) {
//     console.log("C")
// }
// else if(70<= score && score<= 89) {
//     console.log("B")
// }
// else if(90<= score && score<= 100) {
//     console.log("A")
// }
// else {
//    console.log("err")
// }

//scope.js
const person = {
  firstName: 'Asabeneh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: ['HTML', 'CSS', 'JS'],
  title: 'teacher',
  address: {
    street: 'Heitamienkatu 16',
    pobox: 2002,
    city: 'Helsinki',
  },
  getPersonInfo: function () {
    return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
  },
}

//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty
const copyPerson = Object.assign({}, person)
console.log(copyPerson)
const keys = Object.keys(copyPerson)
console.log(keys) //['name', 'age', 'country', 'skills', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address)
console.log(address) //['street', 'pobox', 'city']
const values = Object.values(copyPerson)
console.log(values)
console.log(copyPerson.age)
const entries = Object.entries(copyPerson)
console.log(entries)
console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('score'))
