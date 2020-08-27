import { wishlistUrl } from './../../../config/api';
import { WishlistService } from './../../../services/wishlist.service';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = []
  wishlist: number[]=[];

  constructor(private productService: ProductService, private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.loadProducts();
    this.loadWishlist();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.productList=products;
      this.loadWishlist();
    })
  }

  loadWishlist() {
    this.wishlistService.getWishlist().subscribe(productIds => {
      this.wishlist = productIds;
    })
  }
}
