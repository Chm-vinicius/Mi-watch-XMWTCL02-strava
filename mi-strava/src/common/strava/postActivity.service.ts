import strava from "strava-v3";

export class StravaService {
    async execute() {
        strava.config({
            "access_token": "03f8e7a013b8537d17ea84f7263517715b76aa3f",
            "client_id": "17021",
            "client_secret": "11056f602b09cb03b4e7329cda6e2e31776fee77",
            "redirect_uri": "http://localhost"
        })
        
        strava.activities.create({
            "name": "atividade test",
            'type': "Ride",
            "start_date_local": '2013-10-20T19:20:30+01:00',
            "elapsed_time": "10000"
        })
    }
}
