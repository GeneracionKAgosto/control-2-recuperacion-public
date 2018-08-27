const { getTodosNamesOfUser } = require('./get-todos-names-of-user')

describe('getTodosNamesOf', () => {
  xit('gets the names of the todos', async () => {
    const result = await getTodosNamesOfUser(2)
    expect(result).toEqual(['Comprar libros', 'Ir al cine', 'Pasear al perro'])
  })
  xit('gets the names of the todos', async () => {
    const result = await getTodosNamesOfUser(3)
    expect(result).toEqual(['Conquistar la galaxia'])
  })
})
