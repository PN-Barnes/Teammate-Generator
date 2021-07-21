const Employee = require('./Employee')

class Engineer extends Employee{
    constructor(name, id, email, github){
        
        super(name,id,email);

        this.github = github
        this.getRole = 'Engineer'
    }
    getGithub(github) {
        console.log(`https://github.com/${github}`)
        return `https://github.com/${github}`
    }
}

// const benny = new Engingeer('benny', 02, 'moomoo@moo.com', 'BN-Benny')
// console.log(benny)
// benny.getGithub(benny.github)

module.exports = Engineer;