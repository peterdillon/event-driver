import { Injectable  } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Api } from '../utils/apiHeaders';

export interface Data {
  body: string;
  id: number;
  title: string;
  userId: null;
}

@Injectable({
  providedIn: 'root'
})

export class RideperksService {

  constructor( private http: HttpClient ) { }

  getData(): Observable<any[]> {
    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/posts/1");
  }

  getEvents(params: HttpParams): Observable<any> {
      return this.http.get(Api.url, { ...Api.httpOptions, params });
  }
}
