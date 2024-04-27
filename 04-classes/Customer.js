var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast, age, gender) {
        this._firstName = theFirst;
        this._lastName = theLast;
        this._age = age;
        this._gender = gender;
    }
    //Normal Getter and Setter Method
    Customer.prototype.getFirstName = function () {
        return this._firstName;
    };
    Customer.prototype.setFirstName = function (theFirstName) {
        this._firstName = theFirstName;
    };
    Customer.prototype.getLastName = function () {
        return this._lastName;
    };
    Customer.prototype.setLastName = function (theLastName) {
        this._lastName = theLastName;
    };
    Customer.prototype.showFullName = function () {
        return "".concat(this.getFirstName(), " ").concat(this.getLastName());
    };
    Object.defineProperty(Customer.prototype, "firstName", {
        //Other Ways To Implement Getter And Setter in Type Script
        //This Set Accessor Does Not Required to have Any Return Type
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length < 2) {
                throw new Error("Invalid First Name");
            }
            else {
                this._firstName = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            if (value < 0 || value > 120) {
                console.log("Invalid Age");
            }
            else {
                this._age = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "gender", {
        get: function () {
            return this._gender;
        },
        set: function (value) {
            if (!(value === "Male" || value === "Female")) {
                throw new Error("Gender must be Male or Female.");
            }
            else {
                this._gender = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var myCustomer = new Customer("Jay", "Patel", 23, "Male");
// With Accessors Getter and setter 
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
console.log(myCustomer.age);
console.log(myCustomer.gender);
// With Mormal  Getter and Setter
console.log(myCustomer.getFirstName());
console.log(myCustomer.getLastName());
console.log(myCustomer.showFullName());
