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
      <div className='form-section'>
        <form onSubmit={handleSubmit}>
            <input 
              type='text'
              name='todoTitle'
              value={todos.todoTitle}
              placeholder='Add Todo'
              className='input-text-box'
              onChange={(e) => setTitle(e.target.value)}
            />
            <input type="submit" value="Add" className='submit-todo-btn'/>
        </form>
      </div>
  )
}

export default PopoutForm
