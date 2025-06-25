import { Routes } from '@angular/router';
import {ProductsComponent} from './products/products';
import {HomeComponent} from './home/home';

export const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path:"products", component: ProductsComponent}
];
