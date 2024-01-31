import React from 'react'

const TodoList = ({ todos }) => {
  return (
    <ul className='todo-body'>
      {!todos.todoTitle ? 'Your todo list is empty' : <li>{todos.todoTitle}</li>}
    </ul>
  )
}

export default TodoList
