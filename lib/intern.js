// INCLUDE EMPLOYEE CLASS CONSTRUCTOR
const Employee = require('./employee');

// EXTEND INTERN CLASS FROM EMPLOYEE CLASS
class Intern extends Employee {
    constructor (name, id, email, school) {
        // CALL EMPLOYEE CONSTRUCTOR
        super (name, id, email);
        // ADD INTERN CLASS CONSTRUCTIONS 
        this.school = school; 
    }

    getPosition () {
        return "Intern";
    }
}

module.exports = Intern; 