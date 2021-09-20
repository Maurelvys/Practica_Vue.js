
import gighyApi from '../bases/11-axios'

const getImage = async () => {

    try {
        const {data} = (await gighyApi.get('/random')).data
        const {url} = data.images.original

        const img = document.createElement('img')
        img.src = url
        document.body.append(img)


    }catch (error){
        console.log('Error en la practica', error)
        throw error
    }

}

getImage()
