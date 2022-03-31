(() => {
  let userId: string | number;
  userId = 1
  userId = 'sdgdfgdfgsdf34'

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log({
        type: 'string',
        myText: myText.toLowerCase()
      })
    } else {
      console.log({
        type: 'number',
        myText: myText.toString()
      })
    }
  }

  greeting('a')
  greeting(1)

  // greeting(null)
})()
