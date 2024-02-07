import React, { useState } from 'react'
import PopoutForm from './popoutForm';

const AddTodo = ({ todos, setTodos }) => {
  const [popoutVisible, setPopoutVisible] = useState(false);

  const openPopout = () => {
    setPopoutVisible(true);
  };

  const closePopout = () => {
    setPopoutVisible(false);
  };

  return (
    <>
      <button className='add-todo-btn' onClick={openPopout}>Add Todo</button>
      {popoutVisible && <PopoutForm onClose={closePopout} todos={todos} setTodos={setTodos}/>}
    </>
  )
}

export default AddTodo
