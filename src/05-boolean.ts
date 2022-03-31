(() => {
  let isEnable = true
  // isEnable = 'si'
  // isEnable = 1

  isEnable = false

  let isNew: boolean = true;
  console.log({ isNew })

  isNew = false
  console.log({ isNew })

  const ramdom = Math.random()
  console.log({ ramdom })

  // isEnable = ramdom > 0.5 ? 'si': 'no'

  isEnable = ramdom > 0.5
  console.log(isEnable)
})()
