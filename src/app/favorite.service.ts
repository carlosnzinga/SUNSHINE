// favorite.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Nachricht {
  status: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private apiKey = 'd509557a47960b6d0f1e416165b5aba6';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  
  constructor(private http: HttpClient) {}

  getWeatherDataByCity(city: string) {
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url).toPromise();
  }

  addToFavorites(city: string): Nachricht {
    // Hier würde die Logik stehen, um den Ort zu den Favoriten hinzuzufügen
    // Annahme: Der Eintrag wurde erfolgreich hinzugefügt
    return {
      status: 'success',
      message: `Ort '${city}' wurde den Favoriten hinzugefügt.`
    };
  }

 
}
