const { todo } = require('../models')

class Controller {
  static getTodos(req, res) {
    todo.findAll({
      order :[
        ['id','ASC']
      ]
    })
    .then( todos => {
      res.json(todos)
    })

    .catch( err => {
      res.json(err)
    })
  }

  static Add(req, res) {
    const {task,status} = req.body 

    todo.create({
      task,status
    })

    .then(result => {
      res.json(result)
    }) 
    .catch( err => {
      res.json(err)
    })
  }

  static Find(req,res){
    let id = +req.params.id
    todo.findByPk(id)
    .then(result => {
      if(result != null){
        res.json(result)
      } else{
        res.json({
          message : "Todo not found"
        })
      }
    })
    .catch(err => {
      res.json(err)
    })
  }

  static Delete(req,res){
    let id = +req.params.id
    todo.destroy({
      where : {
        id
      }
    })

    .then(result =>{
      if(result === 1) {
        res.json({
          message : "Todo has been to delete"
        }) 
      } else {
        res.json({
          message : "Todo failed to delete"
        })
      }
    }) .catch(err =>{
      res.json(err)
    })
  }

  static Update(req,res){
    let id = +req.params.id
    const {task,status} = req.body

    todo.update({
    task, status : Boolean(status)
    },{
      where : {
        id 
      }
    })
    .then(result =>{
      if(result !== [1]){
        res.json({
          message : "Todo has been to update"
        }) 
      } else {
        res.json({
          message : "Todo failed to update"
        })
      }
    }) .catch(err =>{
      res.json(err)
    })
  }
}

module.exports = Controller