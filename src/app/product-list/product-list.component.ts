import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  thePig = "hello!";

  share() {
    window.alert('The product has been shared!');
  }

  onNotify(product) {
    window.alert('You will be notified when the product ' +
    product.name + ' goes on sale. 💚️');
  }

  pig() {
    this.thePig = "Goodbye!"
  }  
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/