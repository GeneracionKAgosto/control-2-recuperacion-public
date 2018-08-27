const todos = [
  {
    id: 1,
    title: 'Hacer la compra',
    completed: false
  },
  {
    id: 2,
    title: 'Lavar la ropa',
    completed: false
  },
  {
    id: 3,
    title: 'Comprar libros',
    completed: false
  },
  {
    id: 4,
    title: 'Ir al cine',
    completed: true
  },
  {
    id: 5,
    title: 'Pasear al perro',
    completed: false
  },
  {
    id: 6,
    title: 'Conquistar la galaxia',
    completed: false
  }
]

const users = [
  {
    id: 1,
    name: 'Leanne Graham',
    todos: [1, 2]
  },
  {
    id: 2,
    name: 'Ervin Howell',
    todos: [3, 4, 5]
  },
  {
    id: 3,
    name: 'Darth Vader',
    todos: [6]
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    todos: []
  }
]

const API = {
  getTodoById(todoId) {
    return Promise.resolve(todos.find(t => t.id === todoId))
  },
  getUserById(userId) {
    return Promise.resolve(users.find(u => u.id === userId))
  }
}

module.exports = {
  API
}
