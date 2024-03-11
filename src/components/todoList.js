import React from 'react'
import TodoBox from './todoBox'

const TodoList = ({ todos, removeTodo, selected }) => {
  return (
    <>
      {todos.map((todo, index) => 
        selected === Object.keys(todo)[0] && <TodoBox 
          key={index} 
          todo={todo} 
          removeTodo={removeTodo}
        />
      )}
    </>
  )
}

export default TodoList
