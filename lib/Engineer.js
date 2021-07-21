const Employee = require('./Employee')

class Engingeer extends Employee{
    constructor(name, id, email, github){
        
        super(name,id,email);

        this.github = github
        this.getRole = 'Engineer'
    }
    getGithub(github) {
        return `https://github.com/${github}`
    }
}