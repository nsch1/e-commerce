const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./models')
const { Product } = db
const app = express()
const productsRouter = require('./products/router')
const usersRouter = require('./users/router')

app.use(cors())
app.use(bodyParser.json())
app.use(productsRouter)
app.use(usersRouter)

app.listen(process.env.PORT || 4001, () => console.log('Express API listening on port 4001'))