import React, { useState } from 'react'
import CategoriesForm from './categoriesForm';
import { TiDeleteOutline } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

const PopoutWindow = ({ categories, setCategories, selected, setSelected, todos, setTodos, togglePopoutWindow }) => {

  const handleSlected = (category, index) => {
    setSelected(category);
    togglePopoutWindow();
  }

  const removeCategory = (categoryName, index) => {
    // setCategories(categories.filter(category => category.category !== categoryName));
    setCategories(categories.filter((category, filterIndex) => filterIndex !== index))

    // setTodos(todos.filter(todo => Object.keys(todo)[0] !== categoryName));
    setTodos(todos.filter((todo, filterIndex) => filterIndex !== index));

    if (categoryName === selected) {
      setSelected('');
    }
  }

  return (
    <div className='popout-window'>
      {/* Add Category Form */}
      <CategoriesForm 
        categories={categories}
        setCategories={setCategories}
        todos={todos}
        setTodos={setTodos}
      />
      <hr />

        {/* Categories List */}
        {categories.map(({ category }, index) => 
          category && 
          <div className='category-container' key={index}>
            <button 
              className='category-button'
              onClick={() => handleSlected(category, index)}
          >
            {category}
          </button>
          <button 
            className='category-remove-btn'
            onClick={() => removeCategory(category, index)}
          >
            {<RxCross2 className='category-delete-btn' />}
          </button>
        </div>
        )}
    </div>
  )
}

export default PopoutWindow
