// geolocator.component.ts
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { GeolocatorService } from '../geolocator.service';
import { WeatherService } from '../weather.service'; // Stelle sicher, dass du einen entsprechenden Service für die Wetterdaten erstellt hast
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-geolocator',
  templateUrl: './geolocator.component.html',
  styleUrls: ['./geolocator.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})

export class GeolocatorComponent implements OnInit {

  latitude: number = 0;
  longitude: number = 0;
  altitude: number | null = 0;
  weatherData: any; // Hier wird die Wetterdaten-Variable hinzugefügt
  cityName: string = ''; // Variable zur Speicherung des Stadtnamens

  constructor(
    public geolocationService: GeolocatorService,
    public weatherService: WeatherService
  ) {}

  async getCurrentPosition() {
    const position = await this.geolocationService.getCurrentPosition();

    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    this.altitude = position.coords.altitude;

    // Hier wird die Methode aufgerufen, um Wetterdaten abzurufen
    this.getWeatherData();
  }

  resetPosition() {
    this.latitude = 0;
    this.longitude = 0;
    this.altitude = 0;
    this.weatherData = null; // Wetterdaten zurücksetzen
  }

  // Methode, um Wetterdaten abzurufen
  async getWeatherData() {
    try {
      this.weatherData = await this.weatherService.getWeatherData(
        this.latitude,
        this.longitude
      );
    } catch (error) {
      console.error('Error getting weather data:', error);
    }
  }

  ngOnInit() {
    this.getCurrentPosition();
  }
  
}
