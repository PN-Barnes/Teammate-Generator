const Employee = require('./Employee')

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school
    }
    getSchool(school) {
        console.log(this.school)
        return this.school;
    }
}

const student = new Intern('tyler',03,'blah@blah.com', 'UCLA')

console.log(student)
module.exports = Intern;