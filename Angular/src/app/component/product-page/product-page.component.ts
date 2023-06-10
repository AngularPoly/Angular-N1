import { Component } from '@angular/core';
import { ICategory } from 'src/app/interface/Category';
import { ServiceService } from 'src/app/service/service.service';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  categorys: ICategory[] = []
  constructor(private serviceService: ServiceService) {
    this.serviceService.getAllCategory().subscribe((category: any) => this.categorys = category)

  }
}
