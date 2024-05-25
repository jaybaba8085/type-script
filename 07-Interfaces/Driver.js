"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GolfCoach_1 = require("./GolfCoach");
var CricketCoach_1 = require("./CricketCoach");
var theCoaches = [];
var myCricketCoack = new CricketCoach_1.CricketCoach();
var myGolfCoach = new GolfCoach_1.GolfCoach();
theCoaches.push(myCricketCoack);
theCoaches.push(myGolfCoach);
for (var _i = 0, theCoaches_1 = theCoaches; _i < theCoaches_1.length; _i++) {
    var coaches = theCoaches_1[_i];
    console.log("My ".concat(coaches.constructor.name, " said ").concat(coaches.getDailyWorkout()));
}
