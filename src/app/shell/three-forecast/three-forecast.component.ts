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

  }

}
