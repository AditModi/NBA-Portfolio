import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TwitterApiService {

  api_url = 'https://portfolio-backend0.herokuapp.com'
  constructor(private http: HttpClient) { }


  getTimeline() {
    return this.http
      .get<any[]>(this.api_url + '/home_timeline')
      .pipe(map(data => data));

  }

  getMentions() {
    return this.http
      .get<any[]>(this.api_url + '/mentions_timeline')
      .pipe(map(data => data));

  }


}
