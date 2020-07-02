// Objetos literales

const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: 354345,
    lat: 14.2324,
    long: 34.8765

  }
}

// console.table(persona)

const persona2 = {...persona}
persona2.nombre = 'Peter'

// console.log(persona)
// console.log(persona2)

export { persona }
