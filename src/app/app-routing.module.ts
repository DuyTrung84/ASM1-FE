import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './page/products-list/products-list.component';
import { ProductsAddComponent } from './page/products-add/products-add.component';
import { ProductsEditComponent } from './page/products-edit/products-edit.component';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { NotFoudComponent } from './page/not-foud/not-foud.component';


const routes: Routes = [
  {
    path: '', component: LayoutAdminComponent, children: [
      { path: 'product/list', component: ProductsListComponent },
      { path: 'product/add', component: ProductsAddComponent },
      { path: 'product/list/edit/:id', component: ProductsEditComponent },
    ]
  },
  { path: '**', component: NotFoudComponent },



];

// admin/dashboard

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

