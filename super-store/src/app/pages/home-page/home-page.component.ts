import { Component, OnInit } from '@angular/core';
import { MenuService } from "app/providers/menu.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

  constructor(public menu: MenuService) { }

  ngOnInit() {
  }

  closeMenu() {
    this.menu.close();
  }
}
