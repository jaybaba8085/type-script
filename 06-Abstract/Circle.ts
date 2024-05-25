import { Shape } from "./Shape";

export class Circle extends Shape {

    constructor(theX: number, theY: number, private _radius: number) {
        super(theX, theY);
    }

    getInfo(): string {
        return super.getInfo() + `, radius= ${this._radius}, Area = ${this.getArea()}`;
    }


    public get radius(): number {
        return this._radius;
    }
    public set radius(value: number) {
        if (value < 0) {
            console.log("Invalid value for radius");
        } else {
            this._radius = value;
        }
    }

    calculateArea(): number {
        return Math.PI * this._radius * this._radius;
    }

    getArea(): number{
        return this.calculateArea() + 5;
    }

}