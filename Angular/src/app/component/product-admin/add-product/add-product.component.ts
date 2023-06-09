import { Component } from '@angular/core';
import { ICategory } from 'src/app/interface/Category';
import { IProduct } from 'src/app/interface/Product';
import { ServiceService } from 'src/app/service/service.service';
import ObjectId from 'bson-objectid';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  product: IProduct = {
    name: "",
    auther: "",
    published: "",
    description: "",
    image: "",
    price: 0,
    quantity: 0,
    date: "",
    categoryId: new ObjectId()
  }
  category: ICategory[] = []
  constructor(private productService: ServiceService) {
    this.productService.getAllCategory().subscribe((category) => this.category = category)
  }

  onHandelSubmit() {
    this.productService.AddProduct(this.product).subscribe((product) => console.log(product))
  }


}
