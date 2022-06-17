// EMPLOYEE CONSTRUCTOR
class Employee {
    constructor (name, eid, email) {
        this.name = name,
        this.eid = eid,
        this.email = email
    }

    getName() {
        return this.name;
    }

    getEid() {
        return this.eid;
    }

    getEmail() {
        return this.email;
    }
}

module.exports = Employee;