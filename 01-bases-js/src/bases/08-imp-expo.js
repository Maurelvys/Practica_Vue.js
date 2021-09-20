

/*import {owners} from './data/heroes'

const [dc, marvel] = owners

console.log(dc)
console.log(marvel)*/

import superHeroes from '../data/heroes'

/*const getHeroeById = (id) => {
    return superHeroes.find(hero => hero.id === id )
}*/

export const getHeroeById = (id) => superHeroes.find(hero => hero.id === id )


export const getHeroeByOwner = (owner) => superHeroes.filter(hero => hero.owner === owner )

/*
Este codigo debe ir en otro archivo (index)
import {getHeroeByOwner, getHeroeById} from './bases/08-imp-expo'

console.log(getHeroeById(1))

console.log(getHeroeByOwner('Marvel'))

*/