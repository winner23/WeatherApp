import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/service/weather.service';
import { Current } from 'src/app/models/current.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  cityName: string;
  isFound = false;
  currentWeather: Current;
  temperatureType = "C";
  constructor(public weatherService: WeatherService, private router: Router) { }

  ngOnInit() {
  }
  find() {
    this.router.navigate([""]);
    if (this.cityName) {
      this.weatherService.cityName = this.cityName;
      try {
        this.weatherService.weather.subscribe ( response => {
          if (response) {
            this.currentWeather = response;
            this.isFound = true;
            this.weatherService.currentWeather = this.currentWeather;
          }  
        });  
      } catch (error) {
        this.isFound = false;
        this.currentWeather = undefined;
        this.weatherService.currentWeather = this.currentWeather;
      }
    }
  }
  togle(){
    this.weatherService.units = (this.temperatureType === "C") ? "metric" : "imperial";
    this.find();
    // console.log(this.model);
  }
}
