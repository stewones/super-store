import { Injectable } from '@angular/core';

const products = require('./products.json');
let BASEURL = window.location.href;
BASEURL = BASEURL.substring(0, BASEURL.length-1);

import * as _ from 'lodash';
import * as $ from 'jquery';

@Injectable()
export class ProductsService {

  constructor() { }

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


}
