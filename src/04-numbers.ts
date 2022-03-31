(() => {
  let productPrice = 100;
  productPrice = 12
  console.log({ productPrice })

  let customerAge: number = 28
  //  customerAge = customerAge + '1'
  customerAge = customerAge + 1

  let productInStock: number
  //  console.log({ productInStock })

  // if (productInStock > 10) {
  //   console.log({
  //     msg: 'Pocas Unidades'
  //   })
  // }

  // let discount = parseInt('100')
  let discount = parseInt('dsda100dsa')

  // Ojo aqui se supone que esperamos un numero
  // como retorno de esta función
  // pero si llamamos masl la funcion
  // no podemos controlar el resto del programa

  console.log({ discount })

  if (discount <= 200) {
    console.log({
      msg: 'discount applied'
    })
  } else {
    console.log({
      msg: 'No discount'
    })
  }

  let hex = 0xfff
  console.log({ hex })

  let bin = 0b1010
  console.log({ bin })

  // let aleatorio: Number = 15200
  // Procurar no tipar Number
  // significa otra cosa
})()
