import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable()
export class MenuService {
  opened: boolean = false;
  options: any[] = [
    {
      icon: 'fa fa-home',
      text: 'Home',
      router: '/'
    },
    {
      icon: 'fa fa-gamepad',
      text: 'Produtos',
      router: '/products'
    }
  ]
  
  constructor() { }

  open() {
    this.opened = true;
    this.fix();
  }

  close() {
    this.opened = false;
  }

  fix() {
    if (document.body.scrollTop > 65) {
      $('section.outer').addClass('margin-fix');
    } else {
      $('section.outer').removeClass('margin-fix');
    }
  }
}
