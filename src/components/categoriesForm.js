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
    <form className='category-form' onSubmit={handleSubmit}>
      <input 
        type='text'
        name='category'
        placeholder='Add Category'
        onChange={(e) => setCategoryName(e.target.value)}
    />
    {/* Add button */}
    </form>
  )
}

export default CategoriesForm
