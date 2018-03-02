const Router = require('express').Router
const {Product} = require('../models')

const router = new Router()

router.get('/products', (req, res) => {
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

router.post('/products', (req, res) => {
  const product = req.body
  console.log(product)

  Product.create(product)
    .then(entity => {
      res.status(201).json(entity)
    })
    .catch(err => {
      res.status(422).json({ message: err.message })
    })
})

router.get('/products/:id', (req, res) => {
  Product.findById(req.params.id)
    .then(result => {
      if (!result) return res.status(404).json({ message: "No product found.." })
      res.json(result)
    })
    .catch(err => {
      res.status(500).json({ message: "Oops something went wrong! Try again!" })
    })
})

router.put('/products/:id', (req, res) => {
  const productId = Number(req.params.id)
  const updates = req.body

  Product.findById(req.params.id)
    .then(entity => {
      return entity.update(updates)
    })
    .then(final => {
      res.send(final)
    })
    .catch(error => {
      res.status(500).send({
        message: `Something went wrong`,
        error
      })
    })

})

router.delete('/products/:id', (req, res) => {
  Product.findById(req.params.id)
  .then(entity => {
    return entity.destroy()
  })
  .then(_ => {
    res.send({
      message: 'The product was deleted succesfully'
    })
  })
  .catch(error => {
    res.status(500).send({
      message: `Something went wrong`,
      error
    })
  })
})

module.exports = router