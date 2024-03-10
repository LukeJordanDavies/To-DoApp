import React, { useState } from 'react'

const PopoutForm = ({ onClose, todos, setTodos, categories }) => {
  const [title, setTitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // replace todoTitle with selected category 
    setTodos([
      ...todos,
      {
        todoTitle: title
      }
    ]);

    onClose();
  };
    

  return (
      <div className='form-section'>
        <form onSubmit={handleSubmit}>
          {/* Dropdown menu for selecting category */}
          <select name='categories' onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value=''>Select...</option>
            {categories.map(({category}, index) => 
              category && 
                <option 
                  key={index} 
                  value={category}
                >
                  {category}
                </option>
              )}
          </select>

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
