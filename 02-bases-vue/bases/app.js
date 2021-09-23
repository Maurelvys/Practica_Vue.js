
const app = Vue.createApp({
    // template: `
    // <h1>Hola Mundo</h1>
    // <p>Desde app.js</p>
    // `

    data() {
        return{
            quote: 'Soy Vue',
            author: 'JavaScript'
        }
    },
    methods: {
        changeQuote() {
            console.log('Hola mundo')
            this.author = 'JavaScript'

            this.capitalize()
        },
        capitalize(){
            this.quote = this.quote.toUpperCase()
        }
    }
})

app.mount('#myApp')