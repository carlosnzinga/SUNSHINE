import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { BatteryInfo, Device } from '@capacitor/device';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-battery-status',
  templateUrl: './battery-status.component.html',
  styleUrls: ['./battery-status.component.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule]
})
export class BatteryStatusComponent  implements OnInit {

  alertIsOpen : boolean = false

  battery : BatteryInfo | undefined

  batteryLevel : number | undefined
  batteryIsCharging : boolean | undefined

  constructor() { }

  ngOnInit() {
    this.getBatteryInfo()
  }

  getBatteryInfo = async () => {
      const info = await Device.getBatteryInfo();

      this.batteryLevel = info.batteryLevel
      this.batteryIsCharging = info.isCharging

      this.checkBatteryLevel()

    };

  checkBatteryLevel () {
    if ((this.batteryLevel && this.batteryLevel < 0.1) && !this.batteryIsCharging) {
      this.setAlertOpen(true)
    }
  }

  setAlertOpen (open : boolean) {
    this.alertIsOpen = open
  }

}
