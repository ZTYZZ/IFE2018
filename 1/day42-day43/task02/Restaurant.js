class  Restaurant {
    constructor(cash,seats,staff) {
        this.cash = cash;
        this.seats = seats;
        this.staff = staff;
    }

    hire(employee) {
        this.staff.push(employee);
    }

    fire(employee) {
        let index = this.staff.indexOf(employee);
        this.staff.splice(index,1);
    }
}


