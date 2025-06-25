import {Component, OnInit} from '@angular/core';
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

  constructor() {
  }

  ngOnInit(): void {
    this.products = [
      {id: 1, name : "Computer", price : 6000, description : "Dell computer", promo: false},
      {id: 2, name : "Smart phone", price : 3000, description : "Iphone", promo: true},
      {id: 3, name : "Printer", price : 8000, description : "Wireless Printer",promo: false},
    ];
  }

  handleDelete(id: number) {
    this.products = this.products.filter(product => product.id !== id);
  }
}
