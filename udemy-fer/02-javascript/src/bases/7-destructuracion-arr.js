// Destructuración de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks']

const [,,p3] = personajes
console.log(p3);

const retornaArr = () => {
  return ['ABC', 123]
}

const [letras, numeros] = retornaArr()
console.log(letras, numeros);

// const useState = (valor) => {
//   return [valor, () => console.log('Hola Mundo')]
// }

// const arr = useState('Goku')
// console.log(arr);

const useState = (nombre) => {
  return [nombre, () => console.log('Hola Mundo')]
}

const [nombre, setNombre] = useState('Goku')
console.log(nombre);
setNombre()
