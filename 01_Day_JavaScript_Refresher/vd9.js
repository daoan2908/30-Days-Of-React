// const callback = (n) => {
//   return n ** 2
// }
// // function take other function as a callback
// function cube(callback, n) {
//   return callback(n) * n
// }
// console.log(cube(callback, 3))

// const numbers = [1, 2, 3, 4]
// const sumArray = arr => {
//   let sum = 0
//   const callback = function(element) {
//     sum += element
//   }
//   arr.forEach(callback)
//   return sum

// }
// console.log(sumArray(numbers))

// // function sayHello() {
// //   console.log('Hello')
// // }
// // setInterval(sayHello, 2000) 

// function sayHello() {
//   console.log('Hello')
// }
// setTimeout(sayHello, 2000) // it prints hello after it waits for 2 seconds.

// const numbers = [1, 2, 3]
// const countries = ['Finland', 'Sweden', 'Norway']
// for (const number of numbers) {
//   console.log(number)
// }

// for (const country of countries) {
//   console.log(country)
// }


const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
]

for (const [country, city] of countries) {
  console.log(country, city)
}

const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB'],
]

for (const [first, second, third, fourth] of fullStack) {
  console.log(first, second, third, fourth)
}

const props = {
  user:{
    firstName:'Asabeneh',
    lastName:'Yetayeh',
    age:250
  },
  post:{
    title:'Destructuring and Spread',
    subtitle:'ES6',
    year:2020
},
skills:['JS', 'React', 'Redux', 'Node', 'Python']

}
const {user:{firstName, lastName, age}, post:{title, subtitle, year}, skills:[skillOne, skillTwo, skillThree, skillFour, skillFive]} = props
console.log(props)

const languages = [
  { lang: 'English', count: 91 },
  { lang: 'French', count: 45 },
  { lang: 'Arabic', count: 25 },
  { lang: 'Spanish', count: 24 },
  { lang: 'Russian', count: 9 },
  { lang: 'Portuguese', count: 9 },
  { lang: 'Dutch', count: 8 },
  { lang: 'German', count: 7 },
  { lang: 'Chinese', count: 5 },
  { lang: 'Swahili', count: 4 },
  { lang: 'Serbian', count: 4 },
]

for (const { lang, count } of languages) {
  console.log(`The ${lang} is spoken in ${count} countries.`)
}

const rectangle = { width: 20, height: 10 }
const calcualteArea = ({ width, height }) => width * height
const calculatePerimeter = ({ width, height }) => 2 * (width + height)
console.log(calcualteArea(rectangle))
console.log(calculatePerimeter(rectangle))