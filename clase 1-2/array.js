const matematicos = [
  {
    firstName: "Isaac",
    lastName: "Newton",
    bornYear: 1643,
    passedYear: 1727
  },
  {
    firstName: "Carl",
    lastName: "Gauss",
    bornYear: 1777,
    passedYear: 1855
  },
  {
    firstName: "Leonhard",
    lastName: "Euler",
    bornYear: 1707,
    passedYear: 1783
  },
  {
    firstName: "René",
    lastName: "Descartes",
    bornYear: 1596,
    passedYear: 1650
  }
]

// =============================================================================
// Filtrar todos los matemáticos que nacieron en el 1500
const matematicos1500 = matematicos.filter(
  mate => mate.bornYear >= 1500 && mate.bornYear < 1600,
  0
)
console.table(matematicos1500)

const matematicosMayor1500 = matematicos.filter(mate => mate.bornYear > 1500, 0)
console.table(matematicosMayor1500)

// =============================================================================
// Queremos un array nuevo solamente con los nombres y apellidos
const matematicosNuevo = matematicos.map(mate => {
  return { firstName: mate.firstName, lastName: mate.lastName }
})
console.table(matematicosNuevo)

// =============================================================================
// Ordenar los matematicos por fecha de nacimiento, del más viejo al más joven
const matematicosOrdenados = matematicos.sort((a, b) => b.bornYear - a.bornYear)
console.table(matematicosOrdenados)

// =============================================================================
// Cuantos años vivieron todos los matematicos ?
const matematicosSumAnio = matematicos.reduce(
  (accumulator, currentValue) => accumulator + currentValue.bornYear,
  0
)
console.log("Años totales: ", matematicosSumAnio)

// =============================================================================
// Hay algún matemático de apellido Einstein en nuestra lista ?

// const matematicosSearch = matematicos.filter(mate => mate.lastName === "Newton")
// console.table(matematicosSearch)

const matematicosSearch = searchParam =>
  matematicos.some(mate => mate.lastName === searchParam)

console.log(
  "Existe en la lista el Mr. ".concat("Euler: "),
  matematicosSearch("Euler")
)
