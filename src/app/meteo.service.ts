import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class MeteoService {
  private apiKey = 'd509557a47960b6d0f1e416165b5aba6';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/forecast';
  
  

  constructor(private http: HttpClient) {}

  // Methode, um Wetterdaten abzurufen
  getForecastData(latitude: number, longitude: number) {
    const url = `${this.apiUrl}?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}&units=metric`;

    return this.http.get(url).toPromise();
  }
}
