import React, { useState } from 'react'
import CategoriesForm from './categoriesForm';

const PopoutWindow = ({ categories }) => {
  const [isCatFormVisible, setIsCatFormVisible] = useState(false);

  const toggleCatForm = () => {
    setIsCatFormVisible(!isCatFormVisible);
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
        {isCatFormVisible && <CategoriesForm />}
        
        <hr />

        {/* Categories List */}
        {categories.map(({ category }, index) => 
          <button 
            key={index} 
            className='category-button'
        >
          {category}
        </button>
        )}
    </div>
  )
}

export default PopoutWindow
