import { Forecast } from './forecast.interface';

export class ForecastDaily implements Forecast {
  dt: number; //Time of data forecasted, unix, UTC
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  weather:  {
    id: number;
    main: string;
    description: string;
    icon: string;
    }[];
  speed: number;
  deg: number;
  clouds: number;
  snow: number;
}