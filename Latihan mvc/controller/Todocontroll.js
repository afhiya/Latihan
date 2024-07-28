const Todo = require('../model/Todo')
const Todoview = require('../view/Todoview')

class Todocontrol{
    static show (){
        // console.log("Controler")
        let todos = Todo.show()
        Todoview.show(todos)
    }

    static add(todo){
        Todo.add(todo)
    }

    static update(todo){
        Todo.update(todo)
    }

    static delete(todo){
        Todo.delete(todo)
    }

    static message(msg){
        Todoview.message(msg)
    }
}

module.exports = Todocontrol