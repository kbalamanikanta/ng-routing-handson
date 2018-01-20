import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductsComponent, ProductDetailsComponent]
})
export class ProductsModule { }
