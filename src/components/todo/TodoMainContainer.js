import React from 'react'
import AddTodo from './addTodo/AddTodo'
import ShowTodo from './showTodo/ShowTodo'


import './todoMainContainer.css'

function TodoMainContainer() {
  return (
    <div className="todo-container">
      <AddTodo />
      <ShowTodo />
    </div>
  )
}

export default TodoMainContainer
