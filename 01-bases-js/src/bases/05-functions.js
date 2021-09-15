
const saludar = (nombre = 'Mau') => `Hola ${ nombre }`

const nombre = 'Tony'

//console.log(saludar(nombre))

const getUser = () => ({
    uid: 'ABD123',
    username: 'Tony001'
})

//console.log(getUser())

const heroes = [{
    id: 1,
    name: 'Batman'
},{
    id: 2,
    name: 'Superman'
}]

const existe = heroes.some((heroe) => heroe.id === 1 );

console.log(existe)

