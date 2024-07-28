const fs = require('fs')

class Todo {
    constructor(id,nama,skill,status){
        this.id = id
        this.nama = nama
        this.skill = skill
        this.status = status || false
    }
    static getTodos (){
        let data = fs.readFileSync('./read.json','utf8')
        let parsedData = JSON.parse(data)
        let todos = parsedData.map(el => {
            const {id,nama,skill,status} = el 
            return new Todo(id,nama,skill,status)
        })
        return todos
    }

    static show (){
        let todos = this.getTodos()
        return todos
    }

    static add(todo){
        let todos = this.getTodos()
        let id = todos[todos.length-1].id + 1
        let nama = todo[0]
        let skill = todo[1]
        let status = todo[2]
        switch(status){
            case 'true':
            status = true
            break
            case 'false':
            status = false
            break
        }
        let temp = new Todo (id,nama,skill,status)
        todos.push(temp)
        this.save(todos)
    }

    static delete(todo){
        let todos = this.getTodos()
        let id = Number(todo[0])
        todos = todos.filter(todo => todo.id  !== id)
        this.save(todos)
    }

    static save(data){
        fs.writeFileSync('./read.json',JSON.stringify(data,null,4))
    }

    static update(todo){
        let todos = this.getTodos()
        let id = Number(todo[0])
        let nama = todo[1]
        let skill = todo[2]
        let status = todo[3]
        switch(status){
            case 'true':
            status = true
            break
            case 'false':
            status = false
            break
        }
        todos = todos.map(todo =>{
            if(todo.id === id){
                todo.nama = nama
                todo.skill = skill
                todo.status = status 
            }
            return todo
        })
        this.save(todos)
    }
}

module.exports = Todo