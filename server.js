const express = require('express')
const pokemon = require('./models/pokemon')
const app = express()
const port = 3000
// app.use((req,res,next) =>{
//     console.log(`running middleware function!!!`);
//     next()// going to the next middleware or to the response
//     })


// const getData = require('./models/pokemon')
// const pokeData = getData()


app.set('view engine', 'ejs')
app.set('views', './Views')

app.get('/', (req,res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req,res) => {
    res.render('index', {data: pokemon})
})

app.listen(port, () => {
    console.log(`running`);
})