var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, public, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.fullName = firstName + '' + middleInitial + '' + lastName;
    }
    return Student;
}());
function greeter(person) {
    return 'Hello, ' + person.firstName + '' + person.lastName;
}
var user = new Student('Jane', 'M.', 'User');
document.body.innerHTML = greeter(user);
