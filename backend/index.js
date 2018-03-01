const express = require('express')
const cors = require('cors')
const db = require('./models')
const { Product } = db
const app = express()

app.use(cors())

app.listen(4001, () => console.log('Express API listening on port 4001'))

app.get('/products', (req, res) => {
  Product.findAll({
    attributes: ['id', 'name', 'price']
  })
    .then(result => {
      if (!result) return res.status(404).json({ message: "Sorry no products found."})
      res.json(result)
    })
    .catch(err => {
      res.status(500).json({ message: "Oops something went wrong! Try again!"})
    })
})