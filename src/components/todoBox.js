import React, { useState } from 'react'
import { RiCheckboxBlankCircleLine, RiCheckboxCircleLine } from "react-icons/ri";
import { TiDeleteOutline, TiDelete } from "react-icons/ti";

const TodoBox = ({ todo, removeTodo, selected }) => {
  // Stores the state for the checkmark
  const [isCompleted, setIsCompleted] = useState(false);
  const todoCategory = Object.keys(todo);

  const handleToggle = () => {
    setIsCompleted(!isCompleted);

    // if (isCompleted) {
    //   setCount(prev => prev + 1);
    // } else {
    //   setCount(prev => prev - 1);
    // }
  };

  const handleRemove = () => {
    const categoryName = todoCategory[0];
    const todoName = todo[todoCategory];

    removeTodo(categoryName, todoName);
  };

  if (todo[todoCategory]) {

    return (
      <div className='todo-body'>
        <div className='checkbox-container'>
          <button className='checkbox-btn' onClick={handleToggle}>
            {isCompleted ? <RiCheckboxCircleLine className='checkbox'/> : 
            <RiCheckboxBlankCircleLine 
              className='checkbox'
            />}
          </button>
        </div>
        <div>
          <p className='text'>{todo[todoCategory]}</p>
        </div>
        <div className='delete-button-container'>
          <button className='delete-button' onClick={handleRemove}>
            <TiDeleteOutline className='delete-icon'/>
          </button>
        </div>
      </div>
    )
  }
}

export default TodoBox
