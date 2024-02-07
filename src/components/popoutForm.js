import React, { useState } from 'react'

const PopoutForm = ({ onClose, todos, setTodos }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      {
        todoTitle: title
      }
    ])
    onClose();
  };
    

  return (
    <div className='input-section'>
        <form onSubmit={handleSubmit}>
            <input 
              type='text'
              name='todoTitle'
              value={todos.todoTitle}
              placeholder='Add Todo'
              onChange={(e) => setTitle(e.target.value)}
            />
            <input type="submit" value="Submit"/>
        </form>
    </div>
  )
}

export default PopoutForm

