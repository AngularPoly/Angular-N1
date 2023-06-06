import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CategoryAdminComponent } from './component/category-admin/category-admin.component';
import { AddCategoryComponent } from './component/category-admin/add-category/add-category.component';
import { EditCategoryComponent } from './component/category-admin/edit-category/edit-category.component';

const routes: Routes = [
  {path:"admin", component: AdminComponent, children:[
    {path:"", redirectTo: "dashboard", pathMatch: "full"},
    {path:"dashboard", component: DashboardComponent},
    {path:"categorys", component: CategoryAdminComponent},
    {path:"categorys/add", component: AddCategoryComponent},
    {path:"categorys/edit", component: EditCategoryComponent}
  ]}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }