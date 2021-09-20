
import axios from 'axios'

const apiKey = 'NyW7N44dNgKzjPDpMEgSTx4n5iAI0POW'
//`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`

const gighyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
})

export default gighyApi





/*gighyApi.get('/random')
    .then(resp => {

        const {data} = resp.data
        const {url} = data.images.original

        const img = document.createElement('img')
        img.src = url

        document.body.append(img)

    })*/
