const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.getRole = 'Manager'
        this.officeNumber = officeNumber
    }

}


const jerry = new Manager('jerry', 01, 'moo@moo.com', 123)
console.log(jerry)

module.exports = Manager;