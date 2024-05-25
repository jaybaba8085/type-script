"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var myCircle = new Circle_1.Circle(0, 0, 5);
// let myRectangle = new Rectangle(0, 0, 1, 2);
//Declare an Array of shapes ...initially empty
var theShapes = [];
// theShapes.push(myShape);
theShapes.push(myCircle);
// theShapes.push(myRectangle);
for (var _i = 0, theShapes_1 = theShapes; _i < theShapes_1.length; _i++) {
    var tempShape = theShapes_1[_i];
    console.log(tempShape.getInfo());
    console.log("Area of ".concat(tempShape.constructor.name, " = ").concat(tempShape.calculateArea(), "}"));
}
