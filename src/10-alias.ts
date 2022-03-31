(() => {

  // Alias

  type UserID = string | number

  // Literal types

  type Sizes = 'S' | 'M' | 'L' | 'XL'

  let shirtSize: Sizes

  shirtSize = 'S'
  shirtSize = 'M'

  function greeting(myText: UserID) {
    if (typeof myText === 'string') {
      console.log({
        type: 'string',
        myText: myText.toLowerCase()
      })
    }
  }

  greeting('a')
  greeting(1)
})()
