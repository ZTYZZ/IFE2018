
var count = 0;
function Employee(name,wage) {
    var id = count++;
    this.name = name;
    this.wage = wage;

    this.getId=function() {
        console.log("我的ID为：",id);
    }
}

Employee.prototype.work = function() {
    console.log("我工作了！！心里mmp");
};


function Waiter(name,wage) {
    var id = count++;
    Employee.call(name,wage);


}
//实现继承
Waiter.prototype = Object.create(Employee.prototype);

Waiter.prototype.constructor = Waiter;

Waiter.prototype.work = function (args) {
    if(args.isArray()) {
        console.log("请问你要点什么菜？我在记录中...");
    }
    else {
        console.log("我要上菜了！！");
    }
};

function Cooker(age,wage) {
    var id = count++;
    Employee.call(this,age,wage);

}
Cooker.prototype = Object.create(Employee.prototype);
Cooker.prototype.constructor = Cooker;

Cooker.prototype.work = function(food) {
    console.log("我要做一道菜"+food.name);
};






