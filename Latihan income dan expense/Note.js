const { stringify } = require('querystring')
const {Income , Expense} = require('./IncomeExpense.js')
const fs = require('fs')

class Note {
    // constructor(list){
    //     this.list = list || []
    // }

    // addIncome(nama,total){
    //     let income = new Income(nama,total,"Income")
    //     this.list.push(income)
    // }

    // addExpense(nama,total){
    //     let expense = new Expense(nama,total,"Expense")
    //     this.list.push(expense)
    // }

    // listIncome(){
    //     console.log("List Income : ")
    //     this.list.forEach(inc => {
    //         if(inc.category === 'income'){
    //             console.log(`${inc.name} Rp. ${inc.total}`)
    //         }
    //     });
    // }

    // listExpense(){
    //     console.log("List Expense : ")
    //     this.list.forEach(inc => {
    //         if(inc.category === 'expense'){
    //             console.log(`${inc.name} Rp. ${inc.total}`)
    //         }
    //     });
    // }

    // balance(){
    //     let totalincome = 0
    //     let totalexpense = 0 
    //     this.list.forEach(el => {
    //         if (el.category === 'income'){
    //             totalincome += el.total
    //         } else if (el.category === 'expense'){
    //             totalexpense += el.total
    //         }
    //     })

    //     //status : balance,minus,plus
    //     let total = totalincome - totalexpense
    //     if (total === 0){
    //         console.log('Status : Balance')
    //     } else if (total < 0){
    //         console.log('Status : Minus')
    //     } else if (total > 0){
    //         console.log('Status : Plus')
    //     }
    // }
    

    static Listincome(){
        let temp = JSON.parse(fs.readFileSync('./data.json','utf8'))
        let incomes = temp.incomes
        console.log("List Income :")
        incomes.forEach(income => {
            const {nama,total} = income
            console.log(`${nama} Rp. ${total}`)
        });
    }

    static Listexpense(){
        let temp = JSON.parse(fs.readFileSync('./data.json','utf8'))
        let expenses = temp.expenses
        console.log("List Income :")
        expenses.forEach(expense => {
            const {nama,total} = expense
            console.log(`${nama} Rp. ${total}`)
        });
    }

    static addIncome(nama,total){
        let temp = JSON.parse(fs.readFileSync('./data.json','utf8'))
        let income = new Income(nama,total,'income')
        temp.incomes.push(income)
        this.save(temp)
    }

    static addExpense(nama,total){
        let temp = JSON.parse(fs.readFileSync('./data.json','utf8'))
        let expense = new Expense(nama,total,'expense')
        temp.expenses.push(expense)
        this.save(temp)
    }

    static save(data){
        fs.writeFileSync('./data.json',JSON.stringify(data,null,3))
    }

    static balance(){
        let temp = JSON.parse(fs.readFileSync('./data.json','utf8'))
        let totalincome = 0
        let totalexpense = 0 

        temp.incomes.forEach(income => {
            totalincome += income.total
        })

        temp.expenses.forEach(expense => {
            totalexpense += expense.total
        })
        console.log(`Income ${totalincome} dan Expense ${totalexpense}`)
        const total = totalincome - totalexpense
        console.log(`Total : ${total}`)
        if(total === 0){
            console.log("Status : Balance")
        } else if (total < 0){
            console.log('Status : Minus')
        } else if (total > 0){
            console.log("Status : Plus")
        }
    }
}

module.exports = Note