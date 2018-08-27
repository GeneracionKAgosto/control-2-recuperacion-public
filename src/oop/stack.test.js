const { Stack } = require('./stack')

describe('Stack', () => {
  describe('constructor', () => {
    xit('podemos crear una pila vacía si no le pasamos nada al contructor', () => {
      const stack = new Stack()
      expect(stack.toString()).toEqual('[]')
    })
    xit('podemos inicializar la pila con los elementos de un array', () => {
      const stack = new Stack([1, 2, 3])
      expect(stack.toString()).toEqual('[1, 2, 3]')
    })
  })
  describe('empty', () => {
    xit('si no hay elementos devuelve false', () => {
      const stack = new Stack()
      expect(stack.isEmpty()).toBe(true)
    })
    xit('si hay elementos devuelve true', () => {
      const stack = new Stack([1, 2, 3])
      expect(stack.isEmpty()).toBe(false)
    })
  })
  describe('top', () => {
    xit('si no hay elementos devuelve null', () => {
      const stack = new Stack()
      expect(stack.top()).toBe(null)
    })
    xit('si hay elementos devuelve el primer elemento de la cola', () => {
      const stack = new Stack([1, 2, 3])
      expect(stack.top()).toBe(3)
    })
  })
  describe('push', () => {
    xit('mete los elementos unos encima del otro en la pila', () => {
      const stack = new Stack()
      stack.push(1)
      stack.push(2)
      stack.push(3)
      expect(stack.toString()).toBe('[1, 2, 3]')
    })
  })
  describe('pop', () => {
    xit('saca los elementos de encima de la pila', () => {
      const stack = new Stack()
      stack.push(1)
      stack.push(2)
      stack.push(3)
      stack.pop()
      expect(stack.toString()).toBe('[1, 2]')
    })
  })
})
