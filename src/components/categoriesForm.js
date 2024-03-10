import React, { useState } from 'react'

const CategoriesForm = ({ categories, setCategories, todos, setTodos }) => {
  const [categoryName, setCategoryName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setCategories([
      ...categories,
      {
        category: categoryName
      }
    ]);

    setTodos([
      ...todos,
      {
        [categoryName]: []
      }
    ]);

    console.log(todos)
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
