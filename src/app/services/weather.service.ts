import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apikey ='23d00211659738ebc5aa5b1e300cc04a';
  URI='';

  constructor(private http: HttpClient) { 
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apikey}&units=metric&q=`
  }

  getWeather(NameCity:String, countryCode:String){
   return this.http.get(`${this.URI}${NameCity},${countryCode}`);
  }
}
