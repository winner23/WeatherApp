import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Current } from '../models/current.model';
import { ForecastHourly } from '../models/forecast-hourly.model';
import { ForecastDaily } from '../models/forecast-daily.model';
import { Forecast } from '../models/forecast.interface';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private API_KEY = "dda0df6af6afa64c2dec9d82fb70f2a7";
  public cityName: string;
  private API_URL = 'https://api.openweathermap.org/data/2.5/';
  public currentWeather: Current;
  
  error: string;
  units = "metric";
  constructor(private http: HttpClient) { }

  url(type: string) {
    if (this.cityName) {
      const requestUrl = `q=${this.cityName}&appid=${this.API_KEY}&units=${this.units || "metric"}`;
      return this.API_URL + type + "?" + requestUrl;
    }
    return; 
  }
  unitFor(data: string): string {
    switch (data) {
      case "temp":
        return (this.units === "metric") ? "°C" : "°F";
      case "wind":
        return (this.units === "metric") ? "m/s" : "m/h"
      default:
        break;
    }
  }
  get weather(): Observable<Current> {
    if (this.cityName && this.cityName.length > 2) {
    return this.http.get<Current>(this.url("weather"))
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
  forecast(hourly = true): Observable<Forecast[]> {
    if (hourly && this.currentWeather) {
      return this.http.get<ForecastHourly[]>(this.url("forecast"))
      .pipe(map( (response: any) => {
        this.error = undefined;
        return response.list;
      }), catchError( (error: any) => {
        this.currentWeather = undefined;
        this.error = error.statusText;
        return throwError(error);
      }));
      } else if (this.currentWeather) {
        return this.http.get<ForecastDaily[]>(this.url("forecast/daily")+"&cnt=10")
      .pipe(map( (response: any) => {
        this.error = undefined;
        return response.list;
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
