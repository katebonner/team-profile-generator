const Intern = require('../lib/intern');

// TEST INSTANTIATION OF OBJECT 
test('check if an intern object has been created', () => {
    // TEST INPUT
    const testName = 'kate';
    const testEid = '888';
    const testEmail = 'katebonner@gmail.com';
    const testSchool = 'Georgetown'

    // OPERATION
    const intern = new Intern(testName, testEid, testEmail, testSchool);
    
    // TEST OUTPUT
    const resultName = intern.name;
    const resultEid = intern.eid;
    const resultEmail = intern.email;
    const resultSchool = intern.school;

    // TEST
    expect(testName).toEqual(resultName);
    expect(testEid).toEqual(resultEid);
    expect(testEmail).toEqual(resultEmail);
    expect(testSchool).toEqual(resultSchool);
})

// TEST getName() FUNCTION
test('check if getName() function returns the name', () => {
    // TEST INPUT
    const testName = 'kate';
    const testEid = '888';
    const testEmail = 'katebonner@gmail.com';
    const testSchool = 'Georgetown'

    // OPERATION
    const intern = new Intern(testName, testEid, testEmail, testSchool);
    
    // TEST OUTPUT
    const resultName = intern.getName();

    // TEST
    expect(testName).toEqual(resultName);
})

// TEST getEid() FUNCTION
test('check if getEid() function returns the eid', () => {
    // TEST INPUT
    const testName = 'kate';
    const testEid = '888';
    const testEmail = 'katebonner@gmail.com';
    const testSchool = 'Georgetown'

    // OPERATION
    const intern = new Intern(testName, testEid, testEmail, testSchool);
    
    // TEST OUTPUT
    const resultEid = intern.getEid();

    // TEST
    expect(testEid).toEqual(resultEid);
})

// TEST getEmail() FUNCTION
test('check if getEmail() function returns the email', () => {
    // TEST INPUT
    const testName = 'kate';
    const testEid = '888';
    const testEmail = 'katebonner@gmail.com';
    const testSchool = 'Georgetown'

    // OPERATION
    const intern = new Intern(testName, testEid, testEmail, testSchool);
    
    // TEST OUTPUT
    const resultEmail = intern.getEmail();

    // TEST
    expect(testEmail).toEqual(resultEmail);
})

// TEST getRole() FUNCTION
test('check if getRole() function returns the position', () => {
    // TEST INPUT
    const testName = 'kate';
    const testEid = '888';
    const testEmail = 'katebonner@gmail.com';
    const testSchool = 'Georgetown'

    // OPERATION
    const intern = new Intern(testName, testEid, testEmail, testSchool);
    
    // TEST OUTPUT
    const resultRole = intern.getRole();

    // TEST
    expect('Intern').toEqual(resultRole);
})

// TEST getSchool() FUNCTION
test('check if getSchool() function returns the position', () => {
    // TEST INPUT
    const testName = 'kate';
    const testEid = '888';
    const testEmail = 'katebonner@gmail.com';
    const testSchool = 'Georgetown'

    // OPERATION
    const intern = new Intern(testName, testEid, testEmail, testSchool);
    
    // TEST OUTPUT
    const resultSchool = intern.getSchool();

    // TEST
    expect(testSchool).toEqual(resultSchool);
})