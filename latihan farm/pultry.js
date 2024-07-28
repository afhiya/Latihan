class Pultry{
    constructor(id,category,price){
        this.id = id 
        this.category = category || ''
        this.price = price || 0
    }
}

class Chicken extends Pultry{
    constructor(id,price,isMature){
        super(id,'chicken',price)
        this.isMature = isMature || 'n'
    }
}
class Duck extends Pultry{
    constructor(id,price,isMature){
        super(id,'duck',price)
        this.isMature = isMature || 'n'
    }
}
class Turkey extends Pultry{
    constructor(id,price,isMature){
        super(id,'turkey',price)
        this.isMature = isMature || 'n'
    }
}
class Quail extends Pultry{
    constructor(id,price,isMature){
        super(id,'quail',price)
        this.isMature = isMature || 'n'
    }
}
class Other extends Pultry{
    constructor(id,price,isMature){
        super(id,'other',price)
        this.isMature = isMature || 'n'
    }
}

module.exports = {
    Chicken,Duck,Turkey,Quail,Other
}