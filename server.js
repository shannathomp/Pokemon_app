const express = require('express')
const pokemonData = require('./models/pokemon')

const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', './Views')

app.get('/', (req,res) => {
    res.send('<h1>Welcome to the Pokemon App</h1>')
})


app.get('/pokemon', (req,res) => {
    res.render('index', {pageHeader:'See All The Pokemon', pageTitle: 'Pokemon',pokemonData})
    
})

app.get('/show',(req,res) => {
    res.render('show', {pageHeader:'Gotta Catch Em All!!', pageTitle: 'Catch them'})
})

app.get('/pokemon/:id', (req,res) => {
    // res.send(req.params.id)
    res.render('show', {pageHeader:'Gotta Catch Em All', pageTitle:'Pokemon Catch', pokemon:pokemonData[req.params.id]})
})

app.listen(port, () => {
    console.log(`we running on ${port}....`)
})






// const express = require('express')
// const pokemon = require('./models/pokemon')
// const app = express()
// const port = 3000
// // app.use((req,res,next) =>{
// //     console.log(`running middleware function!!!`);
// //     next()// going to the next middleware or to the response
// //     })


// // const getData = require('./models/pokemon')
// // const pokeData = pokemon


// app.set('view engine', 'ejs')
// app.set('views', './Views')

// app.get('/', (req,res) => {
//     res.send('Welcome to the Pokemon App!')
// })

// app.get('/pokemon', (req,res) => {
//     res.render('index', {data:pokemon})
// })

// app.get('/pokemon/:id', (req,res) => {
//     res.send(req.params.id);

// })

// // app.get('/show', (req,res) => {
// //     res.render('show')
// // })

// // app.get('/pokemon/search/:name', (req,res) => {
// //     console.log(req.params.name);
// //     const result = pokemon.filter(item => item.name === req.params.name)
// //     console.log(result);
// // })
// app.listen(port, () => {
//     console.log(`running`);
// })