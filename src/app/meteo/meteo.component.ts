// meteo.component.ts
import { Component, OnInit } from '@angular/core';
import { MeteoService } from '../meteo.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { forecastData } from '../data/forecastdata';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class MeteoComponent implements OnInit {

  forecastData : any

  constructor(private meteoService: MeteoService) {}

  ngOnInit() {
    this.getForecast();
  }

  async getForecast() {
    // Simulieren der geografischen Position (Breitengrad und Längengrad)
    const latitude = 0;
    const longitude = 0;

  this.forecastData = await this.meteoService.getForecastData(latitude, longitude);

  console.log(this.forecastData); // Prüfe die erhaltenen Daten in der Konsole
  }

  getDayOfWeek(dt: number): string {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dt * 1000); // Konvertiere UNIX-Timestamp in Millisekunden
    return days[date.getDay()];
  }

  getHourOfDay(dt: number): string {
    const date = new Date(dt * 1000); // Konvertiere UNIX-Timestamp in Millisekunden
    const hour = date.getHours();
    return hour.toString().padStart(2, '0') + ':00'; // Formatierung der Stunden (z. B. 08:00)
  }
}
