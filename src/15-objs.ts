(() => {
  type Sizes = 'S' | 'M'
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }

  const products: Product[] = []

  const addProduct = (data: Product) => {
    products.push(data)
  }

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
})()
