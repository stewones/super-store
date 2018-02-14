// importando dependencias do angular core
import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
// importando dependencias de rota
import { Router, ActivatedRoute } from '@angular/router';
// importando os providers
import { ProductsService } from '../../providers/products.service';
import { CartService } from '../../providers/cart.service';

// decorando o componente para informar como o angular deve trabalhar
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
// exportando a classe deste componente para ser importável por outros arquivos (no caso, o app.module.ts)
export class ProductCardComponent implements OnInit {
  // declarando uma váriavel objeto do tipo any que irá armazenar o produto assim que for resolvido pelo provider mais a frente
  @Input() product: any = {}; // inputa o produto de cima pra baixo
  @Input() view: boolean = false; // para saber se estamos na pagina interna do produto

  constructor(
    // instanciando nossos providers
    public products: ProductsService,
    public cart: CartService
  ) {

  }

  ngOnInit() {
    setTimeout(() => {
      // scroll to top
      this.products.scrollTop();
    }, 0)

  }

  // adiciona ao carrinho
  addToCart(item: any) {
    this.cart.add(item).then(() => { 
      console.info(item.name + ' adicionado/atualizado no carrinho');
    }).catch(console.warn)
  }

}
