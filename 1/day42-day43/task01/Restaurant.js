function Restaurant(information) {
    this.cash = information.cash;
    this.seats = information.seats;
    this.staff = information.staff;

}

Restaurant.prototype.hire = function(employee) {
    this.staff.push(employee);
};

Restaurant.prototype.fire = function(employee) {
    for(var i = 0;i<this.staff.length;i++) {
        if(this.staff[i] === employee) {
            this.staff.splice(i,1);
            break;
        }
    }
};