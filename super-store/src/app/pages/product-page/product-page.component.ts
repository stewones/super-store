// importando dependencias do angular core
import { Component, OnInit, Input } from '@angular/core';
// importando dependencias de rota
import { Router, ActivatedRoute } from '@angular/router';
// importando os providers
import { ProductsService } from '../../providers/products.service';
import { CartService } from '../../providers/cart.service';
import { MenuService } from '../../providers/menu.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.sass']
})
export class ProductPageComponent implements OnInit {

  product: any = {};

  constructor(
    // instanciando a rota ativa
    public activatedRoute: ActivatedRoute,
    // instanciando o roteador
    public router: Router,
    // instanciando nossos providers
    public products: ProductsService,
    public cart: CartService,
    public menu: MenuService
  ) {
    // chama a rota ativa
    this.activatedRoute
      .params
      // se inscreve para quando for resolvida
      .subscribe(
      // recebe os parametros
      params => {
        // declaro uma variavel id baseado no parametro id da url
        let id = params['id'];
        // pego o item em questao
        this.products.view(id)
          // quando resolvido
          .then((product: any) => {
            // liga os dados na view (template)
            this.product = product;
          })
          // tratamento de erro
          .catch((e) => {
            console.error(e);
            // força navegação pra página 404
            this.router.navigate(['/404']);
          })
      });
  }

  ngOnInit() {
  }
  
}
