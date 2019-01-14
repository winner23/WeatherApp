import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreeForecastComponent } from './three-forecast/three-forecast.component';
import { TenForecastComponent } from './ten-forecast/ten-forecast.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    ThreeForecastComponent, 
    TenForecastComponent, 
    FormComponent,
    HomeComponent],
  imports: [
    CommonModule
  ]
})
export class ShellModule { }
