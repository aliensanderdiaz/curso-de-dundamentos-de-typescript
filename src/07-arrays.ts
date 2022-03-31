(() => {
  let prices = [1,22,3,45,6,87,9]
  // prices.push('a')
  // prices.push(true)
  // prices.push({})

  let products = ['Hola', true]
  products.push(false)
  // products.push(5)

  let mixed: (number | string | boolean)[] = ['a', 1]
  mixed.push(true)
  // mixed.push([])
  mixed = []

  let number = [1,2,3,4]

  let duplicate = number.map(item => item * 2)

  console.log({ duplicate })

})()
