import { environment } from 'src/environments/environment'

export const baseUrl = environment.production ? 'https://api.shoppingcart.com' : 'http://192.168.15.188:3000'
export const productsUrl = baseUrl + '/products'
export const cartUrl = baseUrl + '/cart'
export const wishlistUrl = baseUrl + '/wishlist'
