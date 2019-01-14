import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './shell/form/form.component';
import { HomeComponent } from './shell/home/home.component';
import { ThreeForecastComponent } from './shell/three-forecast/three-forecast.component';
import { TenForecastComponent } from './shell/ten-forecast/ten-forecast.component';


@NgModule({
  declarations: [
    FormComponent,
    HomeComponent,
    ThreeForecastComponent,
    TenForecastComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
