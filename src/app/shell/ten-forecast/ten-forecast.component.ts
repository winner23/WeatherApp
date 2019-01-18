import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/service/weather.service';
import { ForecastDaily } from 'src/app/models/forecast-daily.model';
@Component({
  selector: 'app-ten-forecast',
  templateUrl: './ten-forecast.component.html',
  styleUrls: ['./ten-forecast.component.scss']
})
export class TenForecastComponent implements OnInit {

  public forecastDaily: ForecastDaily[];

  constructor(public serviceWeather: WeatherService) { }

  ngOnInit() {
    this.getData();
  }
  getData() {
    if (this.serviceWeather.currentWeather && !this.serviceWeather.error) {
      try {
        this.serviceWeather.forecast(false).subscribe( (forecast: any) => {
          if (forecast && forecast.length > 0) {
            this.forecastDaily = forecast;
          }
        })
      } catch (error) {
        this.forecastDaily = undefined;
        this.serviceWeather.error = error;
      }
    }
  }
  date(date: number): string {
    const certernDate = new Date();
    certernDate.setTime(date);
    const converted = certernDate.toDateString();
    return converted;
  }
  weatherImgUrl(listItem: ForecastDaily): string {
    if (listItem && listItem.weather.length > 0) {
      const weather = listItem.weather[0];
      if (weather) {
        const resultUrl = `https://openweathermap.org/img/w/${weather.icon}.png`;
        return resultUrl;
      }
    }
    return;
  }
}
