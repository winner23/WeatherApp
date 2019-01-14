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
  selectedDegre = false;
  constructor(public weatherService: WeatherService) { }

  ngOnInit() {
  }
  onSubmit() {
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
}
