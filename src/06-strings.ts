(() => {
  let productTitle = 'My amazing product'
  // productTitle = null
  // productTitle = () => {}
  // productTitle = 123
  productTitle = 'My amazing product 2'
  console.log({ productTitle })

  let productDescription = "Bla bla bla bla"
  console.log({ productDescription })

  const summary = `
    ${productTitle},
    ${ productDescription }
  `

  console.log({ summary })

  // let name: String = 'Joah'
})()
