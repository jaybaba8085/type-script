var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast, age, gender) {
        this.firstName = theFirst;
        this.lastName = theLast;
        this._age = age;
        this._gender = gender;
    }
    //Normal Getter and Setter Method
    Customer.prototype.getFirstName = function () {
        return this.firstName;
    };
    Customer.prototype.setFirstName = function (theFirstName) {
        this.firstName = theFirstName;
    };
    Customer.prototype.getLastName = function () {
        return this.lastName;
    };
    Customer.prototype.setLastName = function (theLastName) {
        this.lastName = theLastName;
    };
    Object.defineProperty(Customer.prototype, "age", {
        //Other Ways To Implement Getter And Setter in Type Script
        //This Set Accessor Does Not Required to have Any Return Type
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
// Direct Changeing the Name
// myCustomer.firstName = "J";
// myCustomer.lastName = "P";
// Without Getter and setter 
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
myCustomer.setFirstName("Sam");
myCustomer.setLastName("will");
// With Getter and Setter
console.log(myCustomer.getFirstName());
console.log(myCustomer.getLastName());
//Wuth The Help of Accessors
console.log(myCustomer.age);
console.log(myCustomer.gender);
