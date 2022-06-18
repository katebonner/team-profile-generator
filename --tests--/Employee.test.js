const Employee = require('../lib/employee');

// TEST INSTANTIATION OF OBJECT 
test('check if an employee object has been created', () => {
    // TEST INPUT
    const testName = 'kate';
    const testEid = '888';
    const testEmail = 'katebonner@gmail.com';

    // OPERATION
    const employee = new Employee(testName, testEid, testEmail);
    
    // TEST OUTPUT
    const resultName = employee.name;
    const resultEid = employee.eid;
    const resultEmail = employee.email;

    // TEST
    expect(testName).toEqual(resultName);
    expect(testEid).toEqual(resultEid);
    expect(testEmail).toEqual(resultEmail);
})

// TEST getName() FUNCTION
test('check if getName() function returns the name', () => {
    // TEST INPUT
    const testName = 'kate';
    const testEid = '888';
    const testEmail = 'katebonner@gmail.com'

    // OPERATION
    const employee = new Employee(testName, testEid, testEmail);
    
    // TEST OUTPUT
    const resultName = employee.getName();

    // TEST
    expect(testName).toEqual(resultName);
})

// TEST getEid() FUNCTION
test('check if getEid() function returns the eid', () => {
    // TEST INPUT
    const testName = 'kate';
    const testEid = '888';
    const testEmail = 'katebonner@gmail.com'

    // OPERATION
    const employee = new Employee(testName, testEid, testEmail);
    
    // TEST OUTPUT
    const resultEid = employee.getEid();

    // TEST
    expect(testEid).toEqual(resultEid);
})

// TEST getEmail() FUNCTION
test('check if getEmail() function returns the email', () => {
    // TEST INPUT
    const testName = 'kate';
    const testEid = '888';
    const testEmail = 'katebonner@gmail.com'

    // OPERATION
    const employee = new Employee(testName, testEid, testEmail);
    
    // TEST OUTPUT
    const resultEmail = employee.getEmail();

    // TEST
    expect(testEmail).toEqual(resultEmail);
})

// TEST getRole() FUNCTION
test('check if getRole() function returns the position', () => {
    // TEST INPUT
    const testName = 'kate';
    const testEid = '888';
    const testEmail = 'katebonner@gmail.com'

    // OPERATION
    const employee = new Employee(testName, testEid, testEmail);
    
    // TEST OUTPUT
    const resultRole = employee.getRole();

    // TEST
    expect('Employee').toEqual(resultRole);
})