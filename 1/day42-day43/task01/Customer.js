function Customer() {

}

Customer.prototype.order = function(food) {
    console.log("我要点菜"+food.name);
};

Customer.prototype.eat = function(food) {
    console.log("我在吃"+food.name);
};

