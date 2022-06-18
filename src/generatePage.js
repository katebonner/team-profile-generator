// GENERATE MANAGER SECTION
const generateManagerSection = (manager) => {
    return `
     <div class="card">
        <div class="card-header">
            <h2>${manager.name}</h2>
            <h3>Manager</h3>
        </div>
        <div class="card-body">
            <p class="id"> Employee ID: ${manager.eid}</p>
            <p class="email"> Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="officeNumber"> Office Number: ${manager.officeNumber}</p>
         </div>
    </div>
    `;
}

// GENERATE ENGINEER SECTION
const generateEngineerSection = (engineer) => {
    return `
     <div class="card">
        <div class="card-header">
            <h2>${engineer.name}</h2>
            <h3>Engineer</h3>
        </div>
        <div class="card-body">
            <p class="id"> Employee ID: ${engineer.eid}</p>
            <p class="email"> Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="gitHub"> GitHub: ${engineer.github}</p>
         </div>
    </div>
    `;
}

// GENERATE INTERN SECTION
const generateInternSection = (intern) => {
    return `
     <div class="card">
        <div class="card-header">
            <h2>${intern.name}</h2>
            <h3>Intern</h3>
        </div>
        <div class="card-body">
            <p class="id"> Employee ID: ${intern.eid}</p>
            <p class="email"> Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="gitHub"> School: ${intern.school}</p>
         </div>
    </div>
    `;
}

// GENERATE FULL HTML PAGE
const generateFullHTML = (employeeListHTMLString) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./assets/style.css">
        <title> team profile builder </title>
    </head>
    <body>
        <section class="card.container">
        ${employeeListHTMLString}
        <section>
    </body>
    </html>
    `
}

module.exports = generatePage = (data) => {
    // CREATE ARRAY TO HOLD EMPLOYEE CARD HMTL STRINGS
    let employeeCards = [];
    // LOOP THROUGH DATA TO CREATE EMPLOYEE SECTIONS 
    // BASED UPON POSITION AND PUSH TO employeeCards ARRAY
    for (let i = 0; i < data.length; i++){
        const employee = data[i];
        const position = employee.getRole(); 

        if (position === "Manager") {
            const managerCard = generateManagerSection(employee);
            employeeCards.push(managerCard);
        }

        if (position === 'Engineer') {
            const engineerCard = generateEngineerSection(employee);
            employeeCards.push(engineerCard);
        }

        if (position === 'Intern') {
            const internCard = generateInternSection(employee);
            employeeCards.push(internCard);
        }
        
    }

    // JOIN STRINGS
    const employeeListHTMLString = employeeCards.join('');

    // PASS STRING TO GENERATE FULL HTML PAGE
    const HTMLpage = generateFullHTML(employeeListHTMLString);
    return HTMLpage;

}
