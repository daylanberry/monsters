import React from 'react'
import './Search.css'


const SearchBox = ({ placeholder, handleChange }) => (

    <input className='search' type='search' onChange={handleChange} placeholder={placeholder}/>


)


export default SearchBox