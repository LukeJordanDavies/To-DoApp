import React, { useState } from 'react'
import SearchBar from './searchBar'
import { IoIosMenu } from "react-icons/io";
import PopoutWindow from './popoutWindow';

const TitleBanner = ({ onSearch, categories, setCategories, selected, setSelected, todos, setTodos }) => {
  const [searchBarVisible, setSearchBarVisible] = useState(false);
  const [popoutWindowVisible, setPopoutWindowVisible] = useState(false);

  const toggleSearchBar = () => {
    setSearchBarVisible(!searchBarVisible)
  };

  const closeSearchBar = () => {
    setSearchBarVisible(false);
  };

  const togglePopoutWindow = () => {
    setPopoutWindowVisible(!popoutWindowVisible);
  };

  return (
    <>
      <div className='banner' >

        {/* Popout window button */}
        <button className='popout-button' onClick={togglePopoutWindow}>
          <IoIosMenu className='popout-icon'/>
        </button>

        {/* Popout window */}
        {popoutWindowVisible && 
          <PopoutWindow 
            categories={categories} 
            setCategories={setCategories}
            todos={todos}
            setTodos={setTodos}
            setSelected={setSelected}
            togglePopoutWindow={togglePopoutWindow}
          />}

        {/* Main title */}
        <h1 className='title' onClick={closeSearchBar}>My Todos</h1>

        {/* Search bar */}
        <SearchBar 
          onSearch={onSearch} 
          isVisible={searchBarVisible} 
          setIsVisible={setSearchBarVisible} 
          toggleSearchBar={toggleSearchBar}
        />  
      </div>
      <div>
        <h2>{selected}</h2>
      </div>
    </>
  )
}

export default TitleBanner
