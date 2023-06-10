import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/Product';
import { ServiceService } from 'src/app/service/service.service';
import { ICategory } from 'src/app/interface/Category';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  searchTerm = ''; // khai báo và khởi tạo biến searchTerm
  searchResult: IProduct[] = [];
  categorys: ICategory[] = []
  constructor(private productService: ServiceService) {
    this.productService.getAllProduct().subscribe((product: any) => this.searchResult = product.data)
    this.productService.getAllCategory().subscribe((category: any) => this.categorys = category)
  }

  search() {
    if (this.searchTerm === "") {
      window.location.reload() //chờ fix sau
    }
    else {
      this.searchResult = this.searchResult.filter(product =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

}
