let carts = []

function submit(){
    if(carts.length === 0){
        id = 1
    } else{
        id = carts[carts.length - 1].id + 1
    }
    let barangv = document.getElementById('barang').value
    let namav = document.getElementById('nama').value
    let hargav = document.getElementById('harga').value
    let temp ={
        id,
        barang :barangv,
        harga : +hargav
    }

    document.getElementById('cards').innerHTML = namav + ' Cards'
    carts.push(temp)
    getcarts()
    document.getElementById('harga').value = ''
    document.getElementById('barang').value = ''
}

function getcarts(){
    let tbody = document.getElementById('tbody')
    tbody.innerHTML = ''
    carts.forEach( cart => {
        tbody.innerHTML += `<tr>
            <td>${cart.id}</td>
            <td>${cart.barang}</td>
            <td>RP.${cart.harga}</td>
        </tr>`
    });
}

function cetak(){
    document.querySelector('.form-item').style.display = 'none'
    document.getElementById('print').style.display = 'none'
    window.print()
}