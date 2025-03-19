class Product {
    constructor(name, quantity, price){
        this.name = name;
        this.quantity = quantity;
        this.price = price;

    }
    sell(num) {
        if(this.quantity >= num) this.quantity -= num;
        else throw Error(`We don't have ${num} of ${this.name} in stocks !!!`)
    }
    return(num) {
        this.quantity += num;
    }
    applyDiscount(precentage) {
        if(precentage <= 1)this.price -= this.price *precentage
    }
}

module.exports = Product;