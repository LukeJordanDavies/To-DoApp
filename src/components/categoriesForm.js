import React, { useState } from 'react'

const CategoriesForm = ({ categories, setCategories }) => {
  const [categoryName, setCategoryName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setCategories([
      ...categories,
      {
        category: categoryName
      }
    ]);
  };

  return (
    <div >
      <form className='cat-form-container'>
        <input 
          className='add-category-input'
          type='text'
          name='category'
          placeholder='Add Category'
          onChange={(e) => setCategoryName(e.target.value)}
      />
      {/* Add Category Button */}
      <button 
        className='add-category-button' 
        onClick={handleSubmit}
      >
      Add
      </button>
      </form>
    </div>
  )
}

export default CategoriesForm
