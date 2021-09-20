
const miPromesa = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Tenemos un valor en la promesa')
        }, 1000);
    })
}

const medirTiempoAsync = async() => {

    try {

    console.log('inicio')

    const respuesta = await miPromesa()
    console.log(respuesta)

    console.log('fin')

    }catch (error){
    return 'fin de medir tiempo async'
    //throw 'Error en medirTiempoAsync'
    }
}

medirTiempoAsync()
    .then(valor => console.log(valor))
    .catch(err => console.log('Error:', err))