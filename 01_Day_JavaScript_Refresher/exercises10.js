const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  job: 'Instructor and Developer',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'D3.js',
  ],
  languages: ['Amharic', 'English', 'Suomi(Finnish)'],
}
function getPersonInfo({ firstName, lastName, age, country, job, skills }) {
     const fullName = `${firstName} ${lastName}`
        const personInfo = `${fullName} live in ${country}.He is ${age} years old.He is an ${job}. He teaches ${skills[0]}, ${skills[1]}, ${skills[2]}, ${skills[3]}, ${skills[4]} and ${skills[5]}. He speaks ${person.languages[0]}, ${person.languages[1]} and a little bit of ${person.languages[2]}.`
        return personInfo
}
console.log(getPersonInfo(person))