import { Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CustomersComponent } from './customers/customers.component';
import { SalesComponent } from './sales/sales.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
    { path: 'Category', component: CategoryComponent },
  { path: '', component: CustomersComponent },
  { path: 'Sales', component: SalesComponent },
  { path: 'Product', component: ProductsComponent },


];
