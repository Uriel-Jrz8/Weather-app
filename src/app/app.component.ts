import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import {WeatherService} from './services/weather.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  
date : any;

constructor(private weather:WeatherService ){

}

  ngOnInit(){

  }

GetWeather(city:string, code:string){
  this.weather.getWeather(city,code)
  .subscribe(
    res => {
      console.log(res);
      this.date = res},
    err => console.log(err)
  )
}


submitlocation(city:HTMLInputElement,code:HTMLInputElement){
  if(city.value && code.value){
  this.GetWeather(city.value,code.value);
  console.log(city.value, code.value);
  city.value='';
  code.value='';
  }else{
    alert("Ingresa los datos")
  }

  city.focus();
  return false;

}

}
