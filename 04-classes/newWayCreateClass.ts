class CustomerClass {

    constructor(private _firstName: string,
        private _lastName: string,
        private _age: number,
        private _gender: string) { }
}

let customer1 = new CustomerClass("John", "Doe", 30, "Male");
console.log(`Customer's full name is ${customer1._firstName + " " + customer1._lastName}`); // Output: John Doe
console.log(`Customer Name : ${customer1._firstName + ' ' + customer1._lastName}`); // Outputs - Customer Name : John Doe

