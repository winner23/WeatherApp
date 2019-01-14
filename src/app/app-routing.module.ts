import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shell/home/home.component';
import { ThreeForecastComponent } from './shell/three-forecast/three-forecast.component';
import { TenForecastComponent } from './shell/ten-forecast/ten-forecast.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'forecast3',
    component: ThreeForecastComponent
  },
  {
    path: 'forecast10',
    component: TenForecastComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
