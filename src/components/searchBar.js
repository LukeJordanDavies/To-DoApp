import React, { useState } from 'react'

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (e) => {
    e.preventDefault();

    onSearch(searchTerm);
  } 

  return (
    <form className='searchbar-container' onSubmit={handleSearch}> 
        <input
          className='searchbar' 
          type='text'
          name='search'
          placeholder='Search'
          onChange={(e) => setSearchTerm(e.target.value)}
        />
    </form>
  )
}

export default SearchBar
