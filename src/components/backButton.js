import React from 'react'

const BackButton = ({ clearSearch }) => {
  return (
    <button className='back-button' onClick={clearSearch}>Back</button>
  )
}

export default BackButton
