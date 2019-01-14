import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/service/weather.service';
import { Current } from 'src/app/models/current.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentWeather: Current;

  constructor(public weatherService: WeatherService) { }

  ngOnInit() {
    this.currentWeather = this.weatherService.currentWeather;
  }
  update() {
    console.log(this.currentWeather);
  }
  get picture() {
      return "http://openweathermap.org/img/w/" + this.weatherService.currentWeather.weather[0].icon + ".png";
  }
}
