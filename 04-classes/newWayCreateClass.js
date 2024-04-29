var CustomerClass = /** @class */ (function () {
    function CustomerClass(_firstName, _lastName, _age, _gender) {
        this._firstName = _firstName;
        this._lastName = _lastName;
        this._age = _age;
        this._gender = _gender;
    }
    return CustomerClass;
}());
var customer1 = new CustomerClass("John", "Doe", 30, "Male");
console.log("Customer's full name is ".concat(customer1._firstName + " " + customer1._lastName)); // Output: John Doe
console.log("Customer Name : ".concat(customer1._firstName + ' ' + customer1._lastName)); // Outputs - Customer Name : John Doe
