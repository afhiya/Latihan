const fs = require('fs')
const {Chicken,Duck,Quail,Turkey,Other} = require('./pultry')

class Farm{
    static readCSV(){
        let temp = fs.readFileSync('./data.csv','utf8')
        let tempsplit = temp.split('\r\n')

        let tempdata = []
        for(let i = 1;i < tempsplit.length ; i++){
            tempdata.push(tempsplit[i].split(','))
        }

        let poltries = tempdata.map(data => {
            let [id,category,price,isMature] = data
            switch(category){
                case 'chicken':
                return new Chicken(+id,+price,isMature)
                
                case 'duck':
                return new Duck(+id,+price,isMature)
                
                case 'quail':
                return new Quail(+id,+price,isMature)
                
                case 'turkey':
                return new Turkey(+id,+price,isMature)
                
                default:
                return new Other(+id,+price,isMature)
            }
        })
        return poltries
    }

    static Total(){
        let poltries = this.readCSV()
        let count ={
            chicken : 0,
            duck : 0,
            quail : 0,
            turkey : 0,
            other : 0
        }

        poltries.forEach(poltry => {
            let {category} = poltry
            switch(category){
                case 'chicken':
                count.chicken++
                break
                case 'duck':
                count.duck++
                break
                case 'turkey':
                count.turkey++
                break
                case 'quail':
                count.quail++
                break
                default :
                count.other++
                break
            }
        })
        console.log("Total :")
        console.log(`Chicken : ${count.chicken} ekor`)
        console.log(`Duck : ${count.duck} ekor`)
        console.log(`Turkey : ${count.turkey} ekor`)
        console.log(`Quail : ${count.quail} ekor`)
        console.log(`Other : ${count.other} ekor`)
    }

    static Add(category,price){
        let poultries = this.readCSV()
        let id = poultries[poultries.length - 1].id + 1
        switch(category){
            case 'chicken':
            poultries.push(new Chicken(+id,+price))
            break
            case 'duck':
            poultries.push(new Duck(+id,+price))
            break
            case 'quail':
            poultries.push(new Quail(+id,+price))
            break
            case 'turkey':
            poultries.push(new Turkey(+id,+price))
            break
            default:
            poultries.push(new Other(+id,+price))
        }
        this.Save(poultries)
    }

    static Save(poultries){
        let temp = []
        let result = [
            ['id,category,price,isMature']
        ]
        
        for(let i = 0 ; i < poultries.length ;i++){
            const{id,category,price,isMature} = poultries[i]
            temp.push([id,category,price,isMature])
        }

        for(let i = 0 ; i < temp.length ;i++){
            result.push(temp[i].join(','))
        }
        let fix = result.join('\r\n')
        fs.writeFileSync('./data.csv',fix)
    }

    static Sell(id){
        let poultries = this.readCSV()

            poultries = poultries.filter(poultry => poultry.id !== +id)
            this.Save(poultries)
    }
}

module.exports = Farm