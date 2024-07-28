class Todoview {
    static show(todos){
        // console.log(todos)
        console.log("Data list :")
        todos.forEach(todo => {
            const {id,nama,skill,status} = todo
            if(status){
                console.log(`${id}.  [O], 
    Nama : ${nama}, 
    Skill: ${skill}`)
            } else {
                console.log(`${id}.  [x],
    Nama : ${nama}, 
    Skill: ${skill}`)
            }
        });
    }

    static message(msg){
        console.log(msg)
    }
}

module.exports = Todoview