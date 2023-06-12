import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/Product';
import { ServiceService } from 'src/app/service/service.service';
import ObjectID from 'bson-objectid';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  newCart: IProduct[] = [];
  Addtocart: IProduct[] = [];
  constructor(private route: ActivatedRoute, private productservice: ServiceService) {
    const newCart:any = [];
    this.route.paramMap.subscribe((param) => {
      const id = param.get('id');
      this.productservice.getOneProduct(id).subscribe((cart:any) => {
        console.log(cart.data)
        newCart.push(cart.data);
        localStorage.setItem('cart', JSON.stringify(newCart));
        const cartDataString = localStorage.getItem('cart');
        const myCart = cartDataString ? JSON.parse(cartDataString) : [];
        this.newCart = myCart;
      });
    });
  }
}

