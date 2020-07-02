
// Destructuración

const { persona } = require("./bases/3-obetos-literales");

// Se puede renombrar como en el caso de apellido2
const {nombre, apellido: apellido2, edad} = persona

console.log(nombre);
console.log(apellido2);
console.log(edad);

const useContext = ({nombre, edad, rango = 'Capitán'}) => {
  console.log('Numbre', nombre, rango);
  return {
    nombreClave: nombre,
    anios: edad,
    latlong: {
      lat: 14.876,
      long: -12.423
    }
  }
}
const {nombreClave, anios, latlong, latlong:{lat, long}} = useContext(persona)

console.log(nombreClave, anios, latlong);
console.log(lat, long);