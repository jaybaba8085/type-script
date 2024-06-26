export abstract class Shape {

    constructor(private _x: number, private _y: number) { }

    getInfo(): string {
        return `x= ${this._x}, y= ${this._y}`;
    }

    public get x(): number {
        return this._x;
    }
    public set x(v: number) {
        this._x = v;
    }

    public get y(): number {
        return this._y;
    }
    public set y(v: number) {
        this._y = v;
    }

    abstract calculateArea(): number;
}