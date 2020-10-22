import { environment } from 'src/environments/environment'

export const baseUrl = environment.production ? 'https://api.shoppingcart.com' : 'http://localhost:3000'
export const productsUrl = baseUrl + '/products'
export const cartUrl = baseUrl + '/cart'
// export const cartUrl1 = baseUrl + '/cart/product'
export const wishlistUrl = baseUrl + '/wishlist'
