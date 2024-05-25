import { Coach } from "./Coach";
import { GolfCoach } from "./GolfCoach";
import { CricketCoach } from "./CricketCoach";

let theCoaches: Coach[] =[];

let myCricketCoack = new CricketCoach();
let myGolfCoach = new GolfCoach();

theCoaches.push(myCricketCoack);
theCoaches.push(myGolfCoach);

for(let coaches of theCoaches){
    console.log(`My ${(coaches.constructor as any).name} said ${coaches.getDailyWorkout()}`);
}