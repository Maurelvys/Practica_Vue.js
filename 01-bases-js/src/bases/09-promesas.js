
/*

console.log('Inicio')

new Promise((resolve, rejecet ) => {

    console.log('cuerpo de la promesa')
    rejecet('promesa resulta con error')
})
    .then(msg => console.log(msg))
    .catch(err => console.log(err))

console.log('Fin')

 */


import {getHeroeById} from "./bases/08-imp-expo";

const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const hero = getHeroeById(id)

            if (hero){
                resolve(hero)
            }else {
                reject('Heroe no existe')
            }

        }, 1000);
    });
}

getHeroByIdAsync(3)
    .then(h => {
        console.log(`El heroe es: ${h.name}`)
    })
    .catch(console.log)