(() => {
  const calcTotal = (prices: number[]): number => {
    let total = 0
    prices.forEach((item) => {
      total += item
    })
    return total
  }

  const printTtotal = (prices: number[]): void => {
    let rta  = calcTotal(prices)
    console.log({
      msg: `el total es ${ rta }`
    })
  }

  printTtotal([1,2,3,4,5,6])
})()
