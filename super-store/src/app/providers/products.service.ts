import { Injectable } from '@angular/core';

const products = require('./products.json');
const BASEURL = window.location.href;
import * as _ from 'lodash';
import * as $ from 'jquery';

@Injectable()
export class ProductsService {

  constructor() {
  }

  list() {
    return new Promise((resolve, reject) => {
      products.map((product, i) => {
        // título no-formato-de-slug
        products[i].titleSlug = _.kebabCase(product.name);
        // a rota deste post
        products[i].router = '/products/' + products[i].titleSlug + '/' + products[i].id;
        // a url deste post
        products[i].url = BASEURL + products[i].router;
      });
      resolve(products); // resolve a lista de posts   
    })
  }

  view(id: any) {
    return new Promise((resolve, reject) => {
      this.list().then((products: any[]) => {
        let product = _.find(products, (p) => {
          return p.id == id;
        });
        // se tiver post resolve, senão rejeita
        return product ? resolve(product) : reject('product not found');
      });
    })
  }

  search(keyword: string) {
    return new Promise((resolve, reject) => {
      this.list().then((products: any[]) => {
        let items: any[];
        if (products.length) {
          items = _.filter(products, (p) => {
            return p.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase());
          });
        }
        resolve(items);
      });
    })
  }

  scrollTop() {
    $('html, body').animate({
      scrollTop: 0
    }, 0);
  }

}
