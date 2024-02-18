import React from 'react'
import TodoBox from './todoBox'

const TodoList = ({ todos, removeTodo }) => {
  return (
    <>
      {todos.map(({ todoTitle }, index) => (
        <TodoBox 
          key={index} 
          todoTitle={todoTitle} 
          removeTodo={removeTodo}
        />
      ))}
    </>
  )
}

export default TodoList
