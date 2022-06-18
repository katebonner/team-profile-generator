const Engineer = require('../lib/engineer');

// TEST INSTANTIATION OF OBJECT 
test('check if an engineer object has been created', () => {
    // TEST INPUT
    const testName = 'kate';
    const testEid = '888';
    const testEmail = 'katebonner@gmail.com';
    const testGithub = 'katebonner'

    // OPERATION
    const engineer = new Engineer(testName, testEid, testEmail, testGithub);
    
    // TEST OUTPUT
    const resultName = engineer.name;
    const resultEid = engineer.eid;
    const resultEmail = engineer.email;
    const resultGithub = engineer.github;

    // TEST
    expect(testName).toEqual(resultName);
    expect(testEid).toEqual(resultEid);
    expect(testEmail).toEqual(resultEmail);
    expect(testGithub).toEqual(resultGithub);
})

// TEST getName() FUNCTION
test('check if getName() function returns the name', () => {
    // TEST INPUT
    const testName = 'kate';
    const testEid = '888';
    const testEmail = 'katebonner@gmail.com';
    const testGithub = 'katebonner'

    // OPERATION
    const engineer = new Engineer(testName, testEid, testEmail, testGithub);
    
    // TEST OUTPUT
    const resultName = engineer.getName();

    // TEST
    expect(testName).toEqual(resultName);
})

// TEST getEid() FUNCTION
test('check if getEid() function returns the eid', () => {
    // TEST INPUT
    const testName = 'kate';
    const testEid = '888';
    const testEmail = 'katebonner@gmail.com';
    const testGithub = 'katebonner'

    // OPERATION
    const engineer = new Engineer(testName, testEid, testEmail, testGithub);
    
    // TEST OUTPUT
    const resultEid = engineer.getEid();

    // TEST
    expect(testEid).toEqual(resultEid);
})

// TEST getEmail() FUNCTION
test('check if getEmail() function returns the email', () => {
    // TEST INPUT
    const testName = 'kate';
    const testEid = '888';
    const testEmail = 'katebonner@gmail.com';
    const testGithub = 'katebonner'

    // OPERATION
    const engineer = new Engineer(testName, testEid, testEmail, testGithub);
    
    // TEST OUTPUT
    const resultEmail = engineer.getEmail();

    // TEST
    expect(testEmail).toEqual(resultEmail);
})

// TEST getRole() FUNCTION
test('check if getRole() function returns the position', () => {
    // TEST INPUT
    const testName = 'kate';
    const testEid = '888';
    const testEmail = 'katebonner@gmail.com';
    const testGithub = 'katebonner'

    // OPERATION
    const engineer = new Engineer(testName, testEid, testEmail, testGithub);
    
    // TEST OUTPUT
    const resultRole = engineer.getRole();

    // TEST
    expect('Engineer').toEqual(resultRole);
})

// TEST getGithub() FUNCTION
test('check if getGithub() function returns the position', () => {
    // TEST INPUT
    const testName = 'kate';
    const testEid = '888';
    const testEmail = 'katebonner@gmail.com';
    const testGithub = 'katebonner'

    // OPERATION
    const engineer = new Engineer(testName, testEid, testEmail, testGithub);
    
    // TEST OUTPUT
    const resultGithub = engineer.getGithub();

    // TEST
    expect(testGithub).toEqual(resultGithub);
})