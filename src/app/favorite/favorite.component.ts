// favorite.component.ts
import { Component } from '@angular/core';
import { FavoriteService, Nachricht} from '../favorite.service';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
  standalone: true,
  imports: [IonicModule, IonicModule, FormsModule, CommonModule]
})
export class FavoriteComponent {
  city: string = '';
  weatherData: any[] = [];
  isFavorite: boolean = false;
  notification: string = 'Gespeicht success';

  constructor(private favoriteService: FavoriteService) {}

  async searchWeather() {
    try {
      const response: any = await this.favoriteService.getWeatherDataByCity(this.city);
      this.weatherData = [response];
    } catch (error) {
      console.error('Fehler beim Abrufen der Wetterdaten:', error);
    }
  }

  addToFavorites() {
    if (this.isFavorite) {
      const result: Nachricht = this.favoriteService.addToFavorites(this.city);
      if (result) {
        this.notification = result.message;
        console.log('Als Favorit hinzugefügt:', this.weatherData);
      }
    } else {
      console.log('Als Favorit entfernt:', this.weatherData);
    }
  }
}
