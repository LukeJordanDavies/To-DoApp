import React from 'react'
import { RiCheckboxBlankCircleLine, RiCheckboxCircleLine } from "react-icons/ri";
import { TiDeleteOutline, TiDelete } from "react-icons/ti";

const TodoBox = ({ todoTitle }) => {
  return (
    <div className='todo-body'>
      <div className='checkbox-container'>
        <RiCheckboxBlankCircleLine className='checkbox'/>
      </div>
      <div>
        <p className='text'>{todoTitle}</p>
      </div>
      <div className='delete-button-container'>
        <TiDeleteOutline className='delete-button'/>
      </div>
    </div>
  )
}

export default TodoBox
