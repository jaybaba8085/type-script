class Customer {
    private firstName: string;
    private lastName: string;
    private _age: number;
    private _gender: string;

    constructor(theFirst: string, theLast: string, age: number, gender: string) {
        this.firstName = theFirst;
        this.lastName = theLast;
        this._age = age;
        this._gender = gender;
    }


    //Normal Getter and Setter Method

    public getFirstName(): string {
        return this.firstName;
    }
    public setFirstName(theFirstName: string): void {
        this.firstName = theFirstName;
    }
    public getLastName(): string {
        return this.lastName;
    }
    public setLastName(theLastName: string): void {
        this.lastName = theLastName;
    }

    //Other Ways To Implement Getter And Setter in Type Script
    //This Set Accessor Does Not Required to have Any Return Type

    public get age(): number {
        return this._age;
    }

    public set age(value: number) {
        if (value < 0 || value > 120) {
            console.log("Invalid Age");
        } else {
            this._age = value;
        }
    }
    
    public get gender(): string {
        return this._gender;
    }
    
    public set gender(value: string) {
        if (!(value === "Male" || value === "Female")) {
            throw new Error("Gender must be Male or Female.");
        } else {
            this._gender = value;
        }
    }
}

let myCustomer = new Customer("Jay", "Patel", 23, "Male");

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

