import { Coach } from "./Coach";

export class CricketCoach implements Coach{

    getDailyWorkout(): string {
        return "Practice fast bowling for 20 minutes";
    }


}