// INCLUDE EMPLOYEE OBJECT CONSTRUCTOR
const Employee = require('./employee');

// EXTEND MANAGER CLASS FROM EMPLOYEE CLASS
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // CALL EMPLOYEE CONSTRUCTOR
        super (name, id, email); 
        // ADD MANAGER CLASS CONSTRUCTIONS
        this.officeNumber = officeNumber; 
    }

    getPosition () {
        return "Manager";
    }
}

module.exports = Manager; 