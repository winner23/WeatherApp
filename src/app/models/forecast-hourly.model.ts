import { Forecast } from './forecast.interface';
export class ForecastHourly implements Forecast {
    dt: number; //Time of data forecasted, unix, UTC
    main: {
      temp: number; 
      temp_min: number;
      temp_max: number;
      pressure: number;
      sea_level: number;
      grnd_level: number;
      humidity: number;
      temp_kf: number;
    };
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
    clouds: {
      all: number;
    };
    wind: {
      speed: number;
      deg: number;
    };
    sys: {
      pod: string;
    };
    dt_txt: string;
  constructor() {
  }
  
}