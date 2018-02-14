// template baseado no componente hero do bulma
// serviço de menu (provider) pra guardar o estado de abertura do menu e também as opçoes
// [ngClass] pra controlar o nome de classe dinamicamente (se está visivel ou nao)
// *ngFor pra repetir as opcoes do menu que ficam no provider


import { Component, OnInit } from '@angular/core';
import { MenuService } from "app/providers/menu.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
 
  constructor(public menu: MenuService) {

  }

  ngOnInit() {
  }

}
