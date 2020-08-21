export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;

  constructor(id, name, description = '', price = 0, imageUrl = 'data:image/jpeg;base64,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') {
    this.id = id
    this.name = name
    this.description = description
    this.price = price
    this.imageUrl = imageUrl
  }
}
