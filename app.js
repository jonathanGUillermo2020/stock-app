const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config()

const app = express()
 
console.log(process.env.JONATHAN)

mongoose.connect(`mongodb+srv://jonathanguillermomedinaordaz2124:${process.env.MONGO_DB_PASS}@development.7wvyqcv.mongodb.net/?retryWrites=true&w=majority`)

.then(result => {
    app.listen(PORT,() =>{

        console.log(`Servidor escuchando en el puerto ${PORT}`)
    })    
    console.log('Conexion exitosa a la base de BBDD')} )

const productSchema = mongoose.Schema({
    name: { type: String, required: true},
    price: Number,
},
{timestamps: true }
)

const Product = mongoose.model('product',productSchema)

app.use(express.json())


app.post('/api/v1/products',(req, res) => {

const newProduct = new Product(req.body)

newProduct.save().then(result => {

    
})

res.status(201).json({ok: true})
    })

app.use(express.static(path.join(__dirname, 'publico')))


const PORT = process.env.PORT 


