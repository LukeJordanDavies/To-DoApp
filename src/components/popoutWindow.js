import React, { useState } from 'react'
import CategoriesForm from './categoriesForm';

const PopoutWindow = ({ categories, setCategories, setSelected, todos, setTodos }) => {
  const [isCatFormVisible, setIsCatFormVisible] = useState(false);

  const toggleCatForm = () => {
    setIsCatFormVisible(!isCatFormVisible);
  }

  const handleSlected = (category) => {
    setSelected(category);
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
          <button 
            key={index} 
            className='category-button'
            onClick={() => handleSlected(category)}
        >
          {category}
        </button>
        )}
    </div>
  )
}

export default PopoutWindow
