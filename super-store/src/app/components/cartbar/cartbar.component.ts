import { Component, OnInit } from '@angular/core';
import { CartService } from '../../providers/cart.service';

@Component({
  selector: 'app-cartbar',
  templateUrl: './cartbar.component.html',
  styleUrls: ['./cartbar.component.sass']
})
export class CartbarComponent implements OnInit {
  
  constructor(public cart: CartService) {

  }

  ngOnInit() {

  }

  clear() {
    console.info('esvaziando carrinho..');
    this.cart.clear();
  }

}
