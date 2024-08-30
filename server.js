const express = require ('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))

app.get('/products', (req,res ) => {
    res.send('obteniendo products')
})

app.post('/products', (req,res ) => {
    res.send('creando products')
})

app.put('/products', (req,res ) => {
    res.send('actualizando products')
})

app.delete('/products', (req,res ) => {
    res.send('eliminando products')
})

app.listen(3000)
console.log(`server on port ${3000}`)