import { Coach } from "./Coach";

export class GolfCoach implements Coach{

    getDailyWorkout(): string {
        return "Practice Golf for 40 minutes";
    }


}