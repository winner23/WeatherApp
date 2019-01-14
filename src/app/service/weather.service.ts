import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Current } from '../models/current.model';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private API_KEY = "dda0df6af6afa64c2dec9d82fb70f2a7";
  public cityName: string;
  private API_URL = 'https://api.openweathermap.org/data/2.5/weather?';
  public currentWeather: Current;
  error: string;
  units: string;
  constructor(private http: HttpClient) { }

  get url() {
    if (this.cityName) {
      const requestUrl = `q=${this.cityName}&appid=${this.API_KEY}&units=${this.units || "metric"}`;
      return this.API_URL + requestUrl;
    }
    return; 
  }

  get data(): Observable<Current> {
    if (this.cityName && this.cityName.length > 2) {
    return this.http.get<Current>(this.url)
    .pipe(map( (response: any) => {
      this.error = undefined;
      return response;
    }), catchError( (error: any) => {
      this.currentWeather = undefined;
      this.error = error.statusText;
      return throwError(error);
    }));
    } else {
      this.currentWeather = undefined;
      return;
    }
  }

}
