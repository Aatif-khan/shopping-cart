import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from './../../../services/messenger.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItem = [];

    cartTotal = 0

  constructor(private msg: MessengerService, private cartService: CartService) { }

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription() {
    this.msg.getMsg().subscribe((product: Product) => {
      // this.addProductToCart(product);
      this.loadCartItems();
    })

  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItem=items;
      this.calCartTotal();
    })
  }

  calCartTotal() {
    this.cartTotal = 0;
    this.cartItem.forEach(item => {
    this.cartTotal += (item.qty * item.price)
    })
  }

  clrCart() {
    console.log("Clear cart call")
  }

}
