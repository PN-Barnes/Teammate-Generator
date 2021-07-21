const Employee = require('./Employee')

class Engingeer extends Employee{
    constructor(name, id, email, github){
        
        super(name,id,email);

        this.getRole = 'Engineer'
        this.github = github
    }
    getGithub(github) {
        return `https://github.com/${github}`
    }
}

const benny = new Engingeer('benny', 02, 'moomoo@moo.com', 'BN-Benny')
console.log(benny)