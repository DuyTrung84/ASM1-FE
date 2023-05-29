import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsListComponent } from './page/products-list/products-list.component';
import { ProductsAddComponent } from './page/products-add/products-add.component';
import { ProductsEditComponent } from './page/products-edit/products-edit.component';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { NotFoudComponent } from './page/not-foud/not-foud.component';


// decorators
@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductsAddComponent,
    ProductsEditComponent,
    LayoutAdminComponent,
    NotFoudComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
