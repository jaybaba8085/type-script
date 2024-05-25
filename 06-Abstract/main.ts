import { Shape } from "./Shape";
import { Circle } from "./Circle";

let myCircle = new Circle(0, 0, 5);
// let myRectangle = new Rectangle(0, 0, 1, 2);

//Declare an Array of shapes ...initially empty
let theShapes: Shape[] = [];
// theShapes.push(myShape);
theShapes.push(myCircle);
// theShapes.push(myRectangle);

for (let tempShape of theShapes) {
    console.log(tempShape.getInfo());
    console.log(`Area of ${(tempShape.constructor as any).name} = ${tempShape.calculateArea()}}`);
    
}
