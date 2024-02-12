import React from 'react'
import TodoBox from './todoBox'

const TodoList = ({ todos, isCompleted, setIsCompleted }) => {
  return (
    <>
      {todos.map(({ todoTitle }, index) => (
        <TodoBox 
          key={index} 
          todoTitle={todoTitle} 
          isCompleted={isCompleted}
          setIsCompleted={setIsCompleted}
        />
      ))}
    </>
  )
}

export default TodoList
