import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(0, 0);
console.log(myShape.getInfo());

let myCircle = new Circle(0, 0, 4);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(0, 0, 4, 5);
console.log(myRectangle.getInfo());




