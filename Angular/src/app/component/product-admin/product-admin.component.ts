import { Component } from '@angular/core';
import { IProduct } from '../../interface/Product';
import { ServiceService } from '../../service/service.service';


@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.scss']
})
export class ProductAdminComponent {
  products: IProduct[] = []
  constructor(private productService: ServiceService) {
    this.productService.getAllProduct().subscribe((product: any) => this.products = product.data)
  }

  onRemove(_id: any) {
    if (confirm("bạn có muốn xoá sản phẩm này không")) {
      this.productService.deleteProduct(_id).subscribe(() => this.products = this.products.filter((item) => item._id != _id))

    }

  }
}
