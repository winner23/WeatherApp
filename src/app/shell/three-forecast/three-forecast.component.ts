import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/service/weather.service';
import { Forecast } from 'src/app/models/forecast.model';

@Component({
  selector: 'app-three-forecast',
  templateUrl: './three-forecast.component.html',
  styleUrls: ['./three-forecast.component.scss']
})
export class ThreeForecastComponent implements OnInit {

  public forecastHourly: Forecast[];

  constructor(public serviceWeather: WeatherService) { }

  ngOnInit() {
    this.getData();
  }
  getData() {
    if (this.serviceWeather.currentWeather && !this.serviceWeather.error) {
      try {
        this.serviceWeather.forecast(true).subscribe( (data => {
          if (data) {
            this.forecastHourly = data;
          }
        }));
      } catch (error) {
        this.serviceWeather.error = error;
      }
    }
  }
  temperature(forecastItem: Forecast): string {
    if (forecastItem) {
      const temperatureUnit = this.serviceWeather.unitFor("temp");
      return `${forecastItem.main.temp} ${temperatureUnit}`;
    }
    return "";
  }
  weatherImgUrl(listItem: Forecast): string {
    if (listItem && listItem.weather.length > 0) {
      const weather = listItem.weather[0];
      if (weather) {
        const resultUrl = `https://openweathermap.org/img/w/${weather.icon}.png`;
        return resultUrl;
      }
    }
    return;
  }
  tempComplex(listItem: Forecast): string {
    if (listItem && listItem.weather.length > 0) {
      return `${listItem.main.temp_max} ${this.serviceWeather.unitFor("temp")}..${listItem.main.temp_max} ${this.serviceWeather.unitFor("temp")}`;
    }
  }
  isNextDay(day: Forecast): boolean {
    const indexDay = this.forecastHourly.indexOf(day);
    if (this.forecastHourly.indexOf(day) > 0) {
      const currentDay = new Date(day.dt_txt);
      const prevDay = new Date(this.forecastHourly[indexDay-1].dt_txt);
      console.log(`CurrDay: ${currentDay.getDay()} | PrevDay: ${prevDay.getDay()} Res:(${currentDay.getDay() != prevDay.getDay()})`)
      return currentDay.getDay() != prevDay.getDay();
    }
    return true;
  }
}
