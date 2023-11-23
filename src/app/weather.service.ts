// weather.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'd509557a47960b6d0f1e416165b5aba6';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  
  

  constructor(private http: HttpClient) {}

  // Methode, um Wetterdaten abzurufen
  getWeatherData(latitude: number, longitude: number) {
    const url = `${this.apiUrl}?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}&units=metric`;

    return this.http.get(url).toPromise();
  }

  getWeatherDataByCity(city: string) {
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url).toPromise();
  }
  
}
