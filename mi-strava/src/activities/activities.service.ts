import { Injectable } from "@nestjs/common";
import { Strava } from "strava";
import { NewActivityInput } from "./dto/newActivities.input";

@Injectable()
export class ActivitiesService {
    async create(data: NewActivityInput) {
        const strava = new Strava({
            refresh_token: "21989d8b77728be473a92fd871f064782820c085",
            client_id: "17021",
            client_secret: "11056f602b09cb03b4e7329cda6e2e31776fee77"
        })

        try {
            const returned = await strava.activities.createActivity({
                "name": data.name,
                "start_date_local": data.startDate,
                "elapsed_time": data.duration,
                "type": "Ride"
            })
            console.log("response",returned)
            return returned
        } catch(err) {
            console.log("error",err)
            return err
        }
    }
}