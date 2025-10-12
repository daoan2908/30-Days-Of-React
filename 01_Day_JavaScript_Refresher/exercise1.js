let empty = []
let array = [1,2,3,4,5]
console.log(array.length)
console.log(array[0])
console.log(array[3])
let mixedDataTypes = [1, "hi", "?", "xin", ".."]
console.log(mixedDataTypes.length)
let itCompanies = [ "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle and Amazon"]
console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0])
console.log(itCompanies[4])
for(let i =0; i<itCompanies.length; i++) {
    const upper = itCompanies[i].toUpperCase()
    console.log(upper)
}
let company = itCompanies.indexOf("Facebook")
if(company == -1) {
    console.log("not found")
}
else {
    console.log('found')
}

for(let i=0; i<itCompanies.length;i++) {
    if(itCompanies[i].includes('o')) {
        console.log(itCompanies[i])
    }    
}
console.log(itCompanies.sort())
console.log(itCompanies.reverse())
console.log(itCompanies.slice(0,3))
console.log(itCompanies.slice(itCompanies.length-3,itCompanies.length))
console.log(itCompanies.slice(1, itCompanies.length-1))
itCompanies.shift()
console.log(itCompanies)
itCompanies.pop(2)
console.log(itCompanies)




