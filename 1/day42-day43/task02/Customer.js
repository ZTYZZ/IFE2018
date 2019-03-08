class Customer {
    constructor (name,age) {
        this.name = name;
        this.age = age;
    }

    order(food) {
        console.log("我要点"+food.name);
    }

    eat(food) {
        console.log("我在吃"+food.name);
    }
}