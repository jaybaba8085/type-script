import { Shape } from "./Shape";

export class Rectangle extends Shape {

    constructor(theX: number, theY: number, private _width: number,  private _length: number){
        super(theX, theY);
    }

    getInfo(): string {
        return  super.getInfo() +`, width= ${this._width}, length=${this._length}`;
    }

    
    public get width() : number {
        return this._width;
    }
    public set width(value:number) {
         if (value < 0) {
            console.log("Invalid value for width");
        } else {
           this._width = value;  
        }     
    }

    public get length() : number {
        return this._length;
    }
    public set length(value:number) {
        if (isNaN(value)) {
            console.log("invalid value for length.");
        } else {
            this._length = value;
        }
    }
    
}