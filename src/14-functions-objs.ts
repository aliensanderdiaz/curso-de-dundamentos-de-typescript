(() => {
  const login = (email: string, password: string) => {
    console.log({ email, password })
  }

  login('nico@nico.com', '1213232')

  const loginV2 = (data: {email: string, password: string}) => {
    const { email, password } = data
    console.log({ email, password })
  }

  loginV2({email:'nico@nico.com', password: '1213232'})

  type Sizes = 'S' | 'M'

  const products: any[] = []

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
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
