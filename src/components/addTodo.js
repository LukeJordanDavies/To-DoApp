import React, { useState } from 'react'
import PopoutForm from './popoutForm';

const AddTodo = ({ todos, setTodos, categories }) => {
  const [popoutVisible, setPopoutVisible] = useState(false);

  const togglePopout = () => {
    setPopoutVisible(!popoutVisible)
  };

  return (
    <>
      <button className='add-todo-btn' onClick={togglePopout}>Add Todo</button>
      {popoutVisible && 
        <PopoutForm 
          onClose={togglePopout} 
          todos={todos} 
          setTodos={setTodos}
          categories={categories}
        />}
    </>
  )
}

export default AddTodo
