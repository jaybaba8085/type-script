class Customer {
    private _firstName: string;
    private _lastName: string;
    private _age: number;
    private _gender: string;

    constructor(theFirst: string, theLast: string, age: number, gender: string) {
        this._firstName = theFirst;
        this._lastName = theLast;
        this._age = age;
        this._gender = gender;
    }


    //Normal Getter and Setter Method

    public getFirstName(): string {
        return this._firstName;
    }
    public setFirstName(theFirstName: string): void {
        this._firstName = theFirstName;
    }
    public getLastName(): string {
        return this._lastName;
    }
    public setLastName(theLastName: string): void {
        this._lastName = theLastName;
    }
    public showFullName(): string {
        return `${this.getFirstName()} ${this.getLastName()}`;
    }

    //Other Ways To Implement Getter And Setter in Type Script
    //This Set Accessor Does Not Required to have Any Return Type


    public get firstName(): string{
        return this._firstName;
    }
    public set firstName(value:string){
        if (value.length < 2 ) {
            throw new Error("Invalid First Name");
        } else {
            this._firstName= value;
        }
    }

    public get lastName(): string{
        return this._lastName;
    }
    public set lastName(value: string){
        this._lastName = value;
        
    }

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

// With Accessors Getter and setter 
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
console.log(myCustomer.age);
console.log(myCustomer.gender);


// With Mormal  Getter and Setter
console.log(myCustomer.getFirstName());
console.log(myCustomer.getLastName());
console.log(myCustomer.showFullName());




