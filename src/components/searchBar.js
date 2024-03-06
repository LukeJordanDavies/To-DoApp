import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";

const SearchBar = ({ onSearch, isVisible, setIsVisible, toggleSearchBar }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (e) => {
    e.preventDefault();

    onSearch(searchTerm);
    setIsVisible(false);
  } 
  
  return (
    <>
       { !isVisible ? <button className='search-button' onClick={toggleSearchBar}>
        <IoIosSearch className='search-icon'/>
      </button>
      :
      <form className='searchbar-container' onSubmit={handleSearch}> 
          <input
            className='searchbar' 
            type='text'
            name='search'
            placeholder='Search'
            onChange={(e) => setSearchTerm(e.target.value)}
          />
      </form>}
    </>
  )
}

export default SearchBar
