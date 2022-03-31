(() => {
  let myDynamicVar: any;
  myDynamicVar = 100
  myDynamicVar = 'cien'
  myDynamicVar = { valor: 100 }

  // Se aconseja no utilizar any

  myDynamicVar = 'Hola'
  let rta = (myDynamicVar as string).toLowerCase()

  // se usó casting
  myDynamicVar = 100
  rta = (<number>myDynamicVar).toFixed()

  // otra forma de hacer casting
})()
