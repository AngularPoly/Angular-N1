import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ClientComponent } from './layout/client/client.component';
import { SigninComponent } from './layout/signin/signin.component';
import { ProductAdminComponent } from './component/product-admin/product-admin.component';
import { AddProductComponent } from './component/product-admin/add-product/add-product.component';
import { UpdateProductComponent } from './component/product-admin/update-product/update-product.component';
import { HomePageComponent } from './component/home-page/home-page.component';
const routes: Routes = [
  {
    path: "", component: ClientComponent, children: [
      { path: "signin", component: SigninComponent },
      { path: "", component: HomePageComponent }
    ]
  },
  {
    path: "admin", component: AdminComponent, children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", component: DashboardComponent },
      { path: "products", component: ProductAdminComponent },
      { path: "products/add", component: AddProductComponent },
      { path: "products/update", component: UpdateProductComponent }
    ]
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
