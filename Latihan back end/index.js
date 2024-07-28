const route = require('express').Router()
const todo = require('./todo')

route.use('/todos',todo)
route.get('/', (req, res) => {
    res.send('Hello World!')
  })


module.exports = route