// INCLUDE EMPLOYEE CLASS CONSTRUCTOR
const Employee = require('./employee');

// EXTEND ENGINEER CLASS FROM EMPLOYEE CLASS
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // CALL EMPLOYEE CONSTRUCTOR
        super (name, id, email); 
        // ADD ENGINEER SPECIFIC CONSTRUCTIONS
        this.github = github; 
    }

    getPosition () {
        return "Engineer";
    }
}

module.exports = Engineer; 