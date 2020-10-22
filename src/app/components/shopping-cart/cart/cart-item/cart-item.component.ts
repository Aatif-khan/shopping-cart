import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: any
  @Input() productItem: Product

  constructor(private msg: MessengerService,private cartService: CartService) { }

  ngOnInit(): void {
  }

  headElements = ['Product Name', 'Qauntity', 'Price'];

  handleRemoveFromCart(cartItem: any) {
    console.log("handleRemoveFromCart")
    this.cartService.removeProductToCart(cartItem.id).subscribe(() => {
      this.msg.sendMsg(cartItem.id)
    })
  }

}
