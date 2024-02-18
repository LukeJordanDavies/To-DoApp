import React, { useState } from 'react'
import { RiCheckboxBlankCircleLine, RiCheckboxCircleLine } from "react-icons/ri";
import { TiDeleteOutline, TiDelete } from "react-icons/ti";

const TodoBox = ({ todoTitle, removeTodo }) => {
  // Stores the state for the checkmark
  const [isCompleted, setIsCompleted] = useState(false);

  const handleToggle = () => {
    setIsCompleted(!isCompleted);
  };

  const handleRemove = () => {
    removeTodo(todoTitle);
  };

  if (todoTitle) {

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
          <p className='text'>{todoTitle}</p>
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
