import { Component } from '@angular/core';
import { StorageService } from "app/providers/storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(public storage: StorageService) {
    storage.setDrive('local'); // session ou local
  }
}
