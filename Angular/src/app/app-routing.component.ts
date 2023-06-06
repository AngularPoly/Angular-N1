import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

const routes: Routes = [
  {path:"admin", component: AdminComponent, children:[
    {path:"", redirectTo: "dashboard", pathMatch: "full"},
    {path:"dashboard", component: DashboardComponent}
  ]}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }