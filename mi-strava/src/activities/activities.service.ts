import { Injectable } from "@nestjs/common";
import { Activities } from "./activities.model";
import strava from "strava-v3";

@Injectable()
export class ActivitiesService {
    async create(data: Activities) {
        strava.config({
            "access_token": "03f8e7a013b8537d17ea84f7263517715b76aa3f",
            "client_id": "17021",
            "client_secret": "11056f602b09cb03b4e7329cda6e2e31776fee77",
            "redirect_uri": "http://localhost"
        })
        
        const activity = new Activities()
        activity.elapsed_time = data.elapsed_time
        activity.name = data.name
        activity.type = data.type
        activity.start_date_local = data.start_date_local

        await strava.activities.create(activity)
    }
}