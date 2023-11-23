import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { GeolocatorComponent } from '../geolocator/geolocator.component';
import { BatteryStatusComponent } from '../battery-status/battery-status.component';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, GeolocatorComponent, BatteryStatusComponent],
})
export class Tab2Page {

  constructor() {}

}
