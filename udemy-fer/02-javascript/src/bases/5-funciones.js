// Funciones
const saludar = function(nombre) {
  return `Hola ${nombre}`
}

const saludar2 = nombre => {
  return `Hola ${nombre}`
}

const saludar3 = nombre => `Hola ${nombre}`

const getUser = () => ({
  uid: 'ABC123',
  user: 'alex'
})

console.log(saludar('Jose'))
console.log(saludar2('Alex'))
console.log(saludar3('Pedro'))
console.log(getUser())
console.table(getUser())

// Transformar funcion flecha, debe retornar un objeto
const getUsuarioActivo = nombre => ({
  uid: 'ABC456',
  user: nombre
})

const usuarioActivo = getUsuarioActivo('Alex')
console.log(usuarioActivo)