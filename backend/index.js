const express = require('express')
const cors = require('cors')
const db = require('./models')
const { Product } = db
const app = express()

app.use(cors())

app.listen(4001, () => console.log('Express API listening on port 4001'))