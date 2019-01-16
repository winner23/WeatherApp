import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/service/weather.service';
import { Forecast } from 'src/app/models/forecast.model';

@Component({
  selector: 'app-ten-forecast',
  templateUrl: './ten-forecast.component.html',
  styleUrls: ['./ten-forecast.component.scss']
})
export class TenForecastComponent implements OnInit {

  public forecastHourly: Forecast[];

  constructor(public serviceWeather: WeatherService) { }

  ngOnInit() {
  }

}
