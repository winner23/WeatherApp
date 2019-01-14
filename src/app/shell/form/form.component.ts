import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/service/weather.service';
import { Current } from 'src/app/models/current.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  cityName: string;
  isFound: false;
  currentWeather: Current;
  temperatureType = "C";
  constructor(public weatherService: WeatherService) { }

  ngOnInit() {
  }
  find() {
    if (this.cityName) {
      this.weatherService.cityName = this.cityName;
      this.weatherService.data.subscribe ( response => {
        if (response) {
          this.currentWeather = response;
          this.weatherService.currentWeather = this.currentWeather;
        }
      })
    }
  }
  togle(){
    this.weatherService.units = (this.temperatureType === "C") ? "metric" : "imperial";
    this.find();
    // console.log(this.model);
  }
}
