import React, { useState } from 'react'

const PopoutForm = ({ onClose, todos, setTodos, categories, selected }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    todos.map(todo => {
      const catName = Object.keys(todo)[0];

      if (catName === selected) { 
        setTodos([
          ...todos,
          {
            [catName]: [title]
          }
        ]);
    }
})

    onClose();
  };
    

  return (
      <div className='form-section'>
        <form onSubmit={handleSubmit}>
          {/* Text input for add a todo */}
          <input 
            type='text'
            name='todoTitle'
            value={title}
            placeholder=' Enter todo'
            className='input-text-box'
            onChange={(e) => setTitle(e.target.value)}
          />
          <input type="submit" value="Add" className='submit-todo-btn'/>
        </form>
      </div>
  )
}

export default PopoutForm
