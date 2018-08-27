const { Queue } = require('./queue')

describe('Queue', () => {
  describe('constructor', () => {
    xit('podemos crear una cola vacía si no le pasamos nada al contructor', () => {
      const queue = new Queue()
      expect(queue.toString()).toEqual('[]')
    })
    xit('podemos inicializar la cola con los elementos de un array', () => {
      const queue = new Queue([1, 2, 3])
      expect(queue.toString()).toEqual('[1, 2, 3]')
    })
  })
  describe('empty', () => {
    xit('si no hay elementos devuelve false', () => {
      const queue = new Queue()
      expect(queue.isEmpty()).toBe(true)
    })
    xit('si hay elementos devuelve true', () => {
      const queue = new Queue([1, 2, 3])
      expect(queue.isEmpty()).toBe(false)
    })
  })
  describe('top', () => {
    xit('si no hay elementos devuelve null', () => {
      const queue = new Queue()
      expect(queue.front()).toBe(null)
    })
    xit('si hay elementos devuelve el primer elemento de la cola', () => {
      const queue = new Queue([1, 2, 3])
      expect(queue.front()).toBe(3)
    })
  })
  describe('push', () => {
    xit('mete los elementos por el principio de la cola', () => {
      const queue = new Queue()
      queue.push(1)
      queue.push(2)
      queue.push(3)
      expect(queue.toString()).toBe('[3, 2, 1]')
    })
  })
  describe('pop', () => {
    xit('saca los elementos por el final de la cola', () => {
      const queue = new Queue()
      queue.push(1)
      queue.push(2)
      queue.push(3)
      queue.pop()
      expect(queue.toString()).toBe('[3, 2]')
    })
  })
})
