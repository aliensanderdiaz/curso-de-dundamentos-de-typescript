(() => {
  let myProductName = 'Product 1'
  let myProductPrice = 123

  // No se puede asignar otro tipo de dato
  // porque ya infiere que es un string
  // myProductName = 123

  myProductName = 'change'
  myProductName.toLowerCase()

  myProductPrice.toFixed()

  const myProductStock = 1000

  // No se puede reasignar una constante
  // Nos avisa de una vez
  // myProductStock = 500
})()
