(() => {
  let myNull: null = null
  let myUndefined: undefined = undefined

  let myNumber: number | null = null
  myNumber = 12

  let myString: string | undefined = undefined
  myString = 'aaa'

  function hi(name: string | null) {
    let hello = 'Hola '
    if (name) {
      hello += name.toLowerCase()
    } else {
      hello += 'anonymous'
    }
    console.log({ hello })
  }

  hi(null)
  hi('andrea')

  function hiV2(name: string | null) {
    let hello = 'Hola '
    hello += name?.toLowerCase() || 'anonymous'
    console.log({ hello })
  }

  hiV2(null)
  hiV2('andrea')

})()
