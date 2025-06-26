import {Component, OnInit} from '@angular/core';
import {ProductService} from '../services/product';

// import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [
    // NgForOf
  ],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class ProductsComponent implements OnInit {
  products: Array<any> = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.fetchProducts();
  }

  handleDelete(id: number) {
    this.productService.deleteProduct(id).subscribe({
      next: () => {
        this.fetchProducts();
      },
      error: err => {
        console.error(err)
      }
    });
  }

  fetchProducts(): void {
    this.productService.getAllProducts().subscribe({
      next: data => {
        this.products = data;
      },
      error: err => {
        console.error(err);
      }
    });
  }
}
