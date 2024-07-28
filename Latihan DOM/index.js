
let datas = [
    {
        id : 1,
        name : "Belajar DOM",
        status : true
    },
    {
        id : 2,
        name : "Kerjakan Latihan",
        status : false
    }
]

//warna
const target = document.getElementById('container') 
function random(){
    let acak = Math.floor(Math.random()*16777215).toString(16)
    target.style.backgroundColor = "#" + acak
}

function ubahwarna(){
    const warna = document.getElementById('inputwarna')
    target.style.backgroundColor = warna.value
}

// Document Object Model
let button = document.getElementById('button')
function buttonclick(){
    let inputtask = document.getElementById('input').value;
    
    if(inputtask !== ''){
        let id = datas[datas.length - 1].id + 1
    let temp = {
        id,
        name : inputtask,
        status : false
    }
    datas.push(temp)
    get()
    document.getElementById('input').value = ''
    } else {
        alert('Harap masukan task dengan benar!!!')
    }
}


button.addEventListener('click', buttonclick)

function get(){
    let tbody = document.getElementById('tbody')
    tbody.innerHTML = ''
    datas.forEach(data => {
        tbody.innerHTML += `<tr>
            <td>${data.id}</td>
            <td>${data.name}</td>
            <td>${data.status}</td>
        </tr>`
    })
}

get()