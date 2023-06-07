import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ClientComponent } from './layout/client/client.component';
import { SigninComponent } from './layout/signin/signin.component';
import { AddCategoryComponent } from './component/category-admin/add-category/add-category.component';
import { CategoryAdminComponent } from './component/category-admin/category-admin.component';
import { EditCategoryComponent } from './component/category-admin/edit-category/edit-category.component';
import { HomePageComponent } from './component/home-page/home-page.component';
const routes: Routes = [
  {
    path: "", component: ClientComponent, children: [
      { path: "", component: HomePageComponent }
    ]
  },
  {
    path: "admin", component: AdminComponent, children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", component: DashboardComponent },
      { path: "signin", component: SigninComponent },
      { path: "categorys", component: CategoryAdminComponent },
      { path: "category/edit", component: EditCategoryComponent },
      { path: "category/add", component: AddCategoryComponent }

    ]
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
