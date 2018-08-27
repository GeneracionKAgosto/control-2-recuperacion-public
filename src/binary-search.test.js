const { binarySearch } = require('./binary-search')

describe('findFirstCapitalLetter', () => {
  xit('finds the element using binary search algorithm', () => {
    const result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)
    expect(result).toEqual(2)
  })

  xit('returns null if element does not exists', () => {
    const result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 20)
    expect(result).toEqual(null)
  })

  // Esta parte es opcional, para subir nota
  xit('allows the search on complex data', () => {
    const personas = [
      { id: 20, name: 'Lorena' },
      { id: 21, name: 'Oscar' },
      { id: 22, name: 'Laura' },
      { id: 23, name: 'David' },
      { id: 24, name: 'Beatriz' },
      { id: 25, name: 'Veronica' },
      { id: 26, name: 'Raquel' },
      { id: 27, name: 'Raul' },
      { id: 28, name: 'Vanesa' },
      { id: 30, name: 'Alvaro' }
    ]

    const idABuscar = 23
    const result = binarySearch(personas, persona => {
      if (persona.id === idABuscar) {
        return 0
      }
      if (persona.id < idABuscar) {
        return -1
      }
      if (persona.id > idABuscar) {
        return 1
      }
    })
    expect(result).toEqual({ id: 23, name: 'David' })
  })
})
