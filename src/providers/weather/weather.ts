import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class WeatherProvider {
  apiKey = '91305ea54f54e188';
  url;
  results;

  constructor(public http: HttpClient) {
    // this.http = http;
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.wunderground.com/api/' + this.apiKey + '/conditions/q';
  }

  getWeather(city, state) {
    return this.http.get(this.url + '/' + state + '/' + city + '.json')
  }

}
