let count = 0;
class Employee {
    constructor(name,wage) {
        this.name = name;
        this.wage = wage;
        let id = count++;
    }

    work() {
        console.log("完成一次工作");
    }
}

class Waiter extends Employee {

    constructor(name,wage) {
        super(name,wage);
        let id = count++;
    }

    work(args) {
        if(args.isArray()) {
            console.log("记录点菜中");
        }else {
            console.log("上菜咯！");
        }
    }
}


class Chef extends Employee {


    constructor(name,wage) {
        super(name,wage);
        let id = count++;
    }

    work(food) {
        console.log("做菜中"+ food.name);
    }
}
