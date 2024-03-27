import React, { useState } from 'react'
import CategoriesForm from './categoriesForm';

const PopoutWindow = ({ categories, setCategories, setSelected, todos, setTodos, togglePopoutWindow }) => {
  const [isCatFormVisible, setIsCatFormVisible] = useState(false);

  const toggleCatForm = () => {
    setIsCatFormVisible(!isCatFormVisible);
  }

  const handleSlected = (category) => {
    setSelected(category);
    togglePopoutWindow();
  }

  const removeCategory = (categoryName) => {
    setCategories(categories.filter(category => category.category !== categoryName));
    setTodos(todos.filter(todo => Object.keys(todo)[0] !== categoryName));
  }

  return (
    <div className='popout-window'>
        {/* Add Category Button */}
        <button 
          className='category-button' 
          onClick={toggleCatForm}
        >
          Add Category
        </button>

        {/* Add Category Form */}
        {isCatFormVisible && 
          <CategoriesForm 
            categories={categories}
            setCategories={setCategories}
            todos={todos}
            setTodos={setTodos}
          />}
        
        <hr />

        {/* Categories List */}
        {categories.map(({ category }, index) => 
          category && 
          <div className='category-container' key={index}>
            <button 
              className='category-button'
              onClick={() => handleSlected(category)}
          >
            {category}
          </button>
          <button 
            className='category-remove-btn'
            onClick={() => removeCategory(category)}
          >
            R
          </button>
        </div>
        )}
    </div>
  )
}

export default PopoutWindow
