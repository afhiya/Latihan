const command = process.argv[2]
const params = process.argv.slice(3)
const Todocontrol = require('./controller/Todocontroll')

switch(command){
    case 'show':
    // console.log(Todocontrol)
    Todocontrol.show()
    break
    case 'add':
    // console.log("add")
    Todocontrol.add(params)
    break
    case 'delete':
    // console.log("delete")
    Todocontrol.delete(params)
    break
    case 'update':
    // console.log("update")
    Todocontrol.update(params)
    break
    default :
    // console.log("Masukan Yang benar!!!!")
    Todocontrol.message("Masukan Yang benar!!!!")
    break
}