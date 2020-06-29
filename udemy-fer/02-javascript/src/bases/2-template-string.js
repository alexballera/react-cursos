console.log('Hola mundo')

const nombre = 'Alexander'
const apellido = 'Ballera'

// const nombreCompleto = nombre + ' ' + apellido
const nombreCompleto = `${nombre} ${apellido}`

console.log(nombreCompleto)

function getSaludo(nombre) {
  return `Hola ${nombre}`
}

console.log(`Saludo: ${getSaludo(nombre)}`)