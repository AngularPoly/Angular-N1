import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AdminComponent } from './layout/admin/admin.component';
import { AppRoutingModule } from './app-routing.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientComponent } from './layout/client/client.component';
import { CategoryAdminComponent } from './component/category-admin/category-admin.component';
import { AddCategoryComponent } from './component/category-admin/add-category/add-category.component';
import { EditCategoryComponent } from './component/category-admin/edit-category/edit-category.component';
import { SigninComponent } from './layout/signin/signin.component';
import { HomePageComponent } from './component/home-page/home-page.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdminComponent,
    ClientComponent,
    CategoryAdminComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    SigninComponent,
    HomePageComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
