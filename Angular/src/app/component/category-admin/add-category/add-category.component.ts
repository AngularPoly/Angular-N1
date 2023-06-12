import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/interface/Category';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent {
  category: ICategory ={
    name : ""
  }
  constructor(private categoryService: ServiceService,
    private router: Router) {}
  onHandleSubmit(){
    this.categoryService.AddCategory(this.category).subscribe(category=>{
      console.log(category);
      alert("Thêm danh mục thành công")
      this.router.navigate(['/admin/categorys'])
    })
  }
}
