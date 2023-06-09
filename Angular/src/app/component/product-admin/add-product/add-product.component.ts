import { Component } from '@angular/core';
import ObjectId from 'bson-objectid';
import { IProduct } from '../../../interface/Product';
import { ICategory } from '../../../interface/Category';
import { ServiceService } from '../../../service/service.service';
// import { message } from 'ant';
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
  showSuccessAlert = false;
  constructor(private productService: ServiceService) {
    this.productService.getAllCategory().subscribe((category) => this.category = category)
  }

  onHandelSubmit() {
    this.productService.AddProduct(this.product).subscribe((product) => {
      console.log(product);
      this.showSuccessAlert = true;
    });
  }


}
