const Controller = require('./controller/controller')

const todo = require('express').Router()
 
todo.get('/', Controller.getTodos )
todo.post('/add', Controller.Add)
todo.get('/find/:id',Controller.Find)
todo.delete('/delete/:id',Controller.Delete)
todo.put('/update/:id',Controller.Update)

module.exports = todo