

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: '45',
    direccion: {
        ciudad: 'New York',
        zip: 145669,
        lat: 12.8988,
        lng: 24.5556
    }

}

const persona2 = { ...persona};

persona2.nombre = 'Peter'

console.log(persona)
console.log(persona2)




