
const person = {
    name: 'Tony',
    age: 45,
    codeName: 'Iroman'
}

const {name, age, codeName, power = 'No tiene poder'} = person

/*console.log(name)
console.log(age)
console.log(codeName)*/

const  createHero = ({name, age, codeName, power}) =>
    ({
        id: 1129957,
        name,
        age,
        codeName,
        power
    })


console.log(createHero(person))

