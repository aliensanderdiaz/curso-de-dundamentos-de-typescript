(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL' | 'XXL'

  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  console.log({
    product: createProductToJson(
      'Shirt',
      new Date(),
      100,
      'S'
    )
  })

  const createProductToJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  console.log({
    product: createProductToJsonV2(
      'Shirt',
      new Date(),
      100
    )
  })
})()
