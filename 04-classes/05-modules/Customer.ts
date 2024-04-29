 export class Customer {

    constructor(private _firstName: string, private _lastName: string) { }

    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        if (value.length < 2) {
            throw new Error("Invalid First Name");
        } else {
            this._firstName = value;
        }
    }

    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;

    }
}





