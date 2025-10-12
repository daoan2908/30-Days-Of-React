import { countries } from "./countries.js";
import { web_tech } from "./web_tech.js";
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
  text = text.replaceAll(",", "")
  text = text.replaceAll(".", "")
  const text1 = text.split(" ")
  console.log(text.length)
  console.log(text1)

  let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
  let meat = shoppingCart.indexOf('Meat')
  if(meat == -1) {
    shoppingCart.unshift('Meat')
    
  }
  else{
    console.log('avaible')
  }
  console.log(shoppingCart)

  let sugar = shoppingCart.indexOf('Sugar')
  if(sugar == -1) {
    shoppingCart.push('Sugar')
    
  }
  else{
    console.log('avaible')
  }
  console.log(shoppingCart)
  console.log(shoppingCart.indexOf('Tea'))
  shoppingCart[3] = 'Green Tea'
  console.log(shoppingCart)

  let con = countries.indexOf('Ethiopia')
  if (con == -1) {
    countries.unshift('Ethiopia')
  }
  else {
    console.log(countries)
  }
  console.log(countries)

  let con1 = web_tech.indexOf('Sass')
    if (con1 == -1) {
    web_tech.unshift('Sass')
  }
  else {
    console.log('Sass is a CSS preprocess')
  }
  console.log(web_tech)
  const fullstack = countries.concat(web_tech)
  console.log(fullstack)

  const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] 
  console.log(ages.sort())
  console.log(ages[0])
  console.log(ages[ages.length-1])
  if(ages.length % 2 == 0) {
    console.log(ages[ages.length / 2])
    console.log(ages[ages.length / 2 +1])
    console.log((ages[ages.length / 2] + ages[ages.length / 2 +1]) / 2 )
  }
  else {
    console.log(ages[age.length / 2 - 0.5])
  }
 let sum = 0
  for(let i = 0; i<ages.length; i++) {
      sum += ages[i];
  }
  console.log(sum / ages.length)

  let so1 = Math.abs(ages[0] - sum / ages.length)
    let so2 = Math.abs(ages[length-1] - sum / ages.length)
  if(so1>so2) {
    console.log("hieu min lon")
  }
  else {
    console.log("hieu max lon")
  }

  