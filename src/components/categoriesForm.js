import React, { useState } from 'react'

const CategoriesForm = () => {
  const [categoryName, setCategoryName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // set Category in App.js
  };

  return (
    <form className='category-form' onSubmit={handleSubmit}>
      <input 
        type='text'
        name='category'
        placeholder='Add Category'
        onChange={(e) => setCategoryName(e.target.value)}
    />
    </form>
  )
}

export default CategoriesForm
