import { HttpHeaders } from "@angular/common/http";

export class Api {
    public static readonly url = 'https://api.predicthq.com/v1/events/';
    public static readonly httpOptions = { 
       headers: new HttpHeaders({
            "Authorization": "Bearer XP4ehdPqXtHCE9qWZU2W42eiqQeqyuEH4ngnxT3i",
            "Accept": "application/json"
            }
        )};
}
