class Customer {
    private firstName: string;
    private lastName: string;

    constructor(theFirst: string, theLast: string) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}

let myCustomer = new Customer("Jay", "Patel");

myCustomer.firstName = "J";
myCustomer.lastName = "P";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
;
