var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
var myCustomer = new Customer("Jay", "Patel");
myCustomer.firstName = "J";
myCustomer.lastName = "P";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
;
