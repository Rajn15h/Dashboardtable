import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SalesComponent } from "./sales/sales.component";
import { ProductsComponent } from "./products/products.component";
import { CustomersComponent } from "./customers/customers.component";
import { CategoryComponent } from "./category/category.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet,RouterLink, SalesComponent, ProductsComponent, CustomersComponent, CategoryComponent]
})
export class AppComponent {
  title = 'project';
}
