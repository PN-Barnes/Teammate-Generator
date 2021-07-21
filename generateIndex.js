const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const fs = require('fs');

function generateBase() {
    return 
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <title>My Team</title>
    </head>
    <body>
        <header>
            <h1 class="h1 text-center p-3 mb-2 bg-warning text-dark">My Team</h1>
        </header>
        <main class="justify-content-center container col">
            
        </main>
        <footer >
    
        </footer>
    </body>
    </html>
    `
}


function filterManager(information) {
    let Managers = information.filter(info => info.getRole === 'Manager')
    applyToPage(Managers)
}
function filterEngineers(information) {
    let Engineers = information.filter(info => info.getRole === 'Engineer')
    applyToPage(Engineers);
}
function filterIntern(information) {
    let Interns = information.filter(info => info.getRole === 'Intern')
    applyToPage(Interns);
}

function applyToPage(arr) {
    
    if(arr === 'Manager') {
        for( i=0; i < arr.length; i++) {
            card = 
            `
            <div class="card justify-content-center m-3 col-3" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${arr[i].name}</h5>
                    <h6 class="card-subtitle>${arr[i].getRole}</h6>
                    </div>
                    
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">${arr[i].id}</li>
                    <li class="list-group-item">${arr[i].email}</li>
                    <li class="list-group-item">${arr[i].officeNumber}</li>
                    </ul>
                </div>
            
            </div>
    
            `;
            appendFile('test.html', card)
            
        }
    }
    if(arr === 'Engineer') {
        for( i=0; i < arr.length; i++) {
            card = 
            `
            <div class="card justify-content-center m-3 col-3" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${arr[i].name}</h5>
                    <h6 class="card-subtitle>${arr[i].getRole}</h6>
                    </div>
                    
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">${arr[i].id}</li>
                    <li class="list-group-item">${arr[i].email}</li>
                    <li class="list-group-item">${arr[i].github}</li>
                    </ul>
                </div>
            
            </div>
    
            `;
            appendFile('test.html', card)
            
        }
    }
    if(arr === 'Interns') {
        for( i=0; i < arr.length; i++) {
            card = 
            `
            <div class="card justify-content-center m-3 col-3" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${arr[i].name}</h5>
                    <h6 class="card-subtitle>${arr[i].getRole}</h6>
                    </div>
                    
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">${arr[i].id}</li>
                    <li class="list-group-item">${arr[i].email}</li>
                    <li class="list-group-item">${arr[i].school}</li>
                    </ul>
                </div>
            
            </div>
    
            `;
            appendFile(test.html, card)
            
        }
    }
}

module.exports = { filterManager, filterEngineers, filterIntern, applyToPage }