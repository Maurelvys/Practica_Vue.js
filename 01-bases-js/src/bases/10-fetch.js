

const apiKey = 'NyW7N44dNgKzjPDpMEgSTx4n5iAI0POW'
//https://api.giphy.com/v1/gifs/random?api_key=NyW7N44dNgKzjPDpMEgSTx4n5iAI0POW


fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then(resp => resp.json() )
    .then(({ data }) => {
        const {url} = data.images.original

        const img = document.createElement('img')
        img.src = url

        document.body.append(img)
    })


