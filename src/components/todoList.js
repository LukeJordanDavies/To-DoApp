import React from 'react'
import TodoBox from './todoBox'

const TodoList = ({ todos }) => {
  return (
    <>
      {todos.map(({ todoTitle }, index) => (
        <TodoBox key={index} todoTitle={todoTitle}/>
      ))}
    </>
  )
}

export default TodoList
