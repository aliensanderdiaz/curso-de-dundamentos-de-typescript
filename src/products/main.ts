import { addProduct, products } from "./product.service"

addProduct({
  title: 'Product 1',
  createdAt: new Date(),
  stock: 15
})

addProduct({
  title: 'Product 2',
  createdAt: new Date(),
  stock: 15,
  size: 'M'
})

console.log({
  products
})
