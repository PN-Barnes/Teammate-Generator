const Engingeer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
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
        <div class="row justify-content-evenly">
            
            <div class="card justify-content-center m-3 col-3" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title"> </h5>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
                </ul>
                <div class="card-body">
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
                </div>
                
            </div>
            
        </div>  
    </main>
    <footer >

    </footer>
</body>
</html>
`


function filterManager(information) {
    let Managers = information.filter(info => info.getRole === 'Manager')
    return Managers;
}
function filterEngineers(information) {
    let Engineers = information.filter(info => info.getRole === 'Engineer')
    return Engineers;
}
function filterIntern(information) {
    let Interns = information.filter(info => info.getRole === 'Intern')
    return Interns;
}

module.exports = { filterManager, filterEngineers, filterIntern }