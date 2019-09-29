export default class Developer {
    constructor (employee, hourOfWork ) {
        this.employee = employee;
        this.hourOfWork = hourOfWork;
    }
    static employeeSalary() {
        alert(this.hourOfWork * 150);
    }
    
}

