class Income{
    constructor(nama,total,category){
        this.nama = nama
        this.total = total
        this.category = category
    }
}

class Expense{
    constructor(nama,total,category){
        this.nama = nama
        this.total = total
        this.category = category
    }
}

module.exports = {
    Income, Expense
}
