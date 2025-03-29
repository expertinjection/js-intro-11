class Customer {
    constructor(name, age, membershipType, membershipCost) {
        this.name = name;
        this.age = age;
        this.membershipType = membershipType;
        this.membershipCost = membershipCost;
    }

    getDetails() {
        return `${this.name} is ${this.age} years old and has a ${this.membershipType} membership with $${this.membershipCost}.`;
    }

    upgradeMembership() {
        this.membershipType = 'Premium';
        this.membershipCost *= 1.20; 
    }
}


class VIPCustomer extends Customer {
    constructor(name, age, membershipType, membershipCost) {
        super(name, age, membershipType, membershipCost);
    }

    applyDiscount() {
        this.membershipCost *= 0.90; 
    }
}


class BusinessCustomer extends Customer {
    constructor(name, age, membershipType, membershipCost, duration) {
        super(name, age, membershipType, membershipCost);
        this.duration = duration; 
    }

    extendContract() {
        this.duration += 1;
        this.membershipCost *= 0.85; 
    }
}

const customer1 = new Customer('john Doe', 35, 'Basic', 50);

const vipCustomer = new VIPCustomer('Jane Smith', 35, 'Gold', 100);

const businessCustomer = new BusinessCustomer('David Johnson', 40, 'Platinum', 200, 2);

customer1.upgradeMembership();
console.log(customer1.getDetails());

vipCustomer.applyDiscount();
console.log(vipCustomer.getDetails());

businessCustomer.extendContract();
console.log(businessCustomer.getDetails());