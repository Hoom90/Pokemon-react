import React from 'react'

export default function Search(props) {

  const handleSearch = (event) =>{
    props.searchCard(event.target.value)
  }

  return (
    <input type="text" onKeyUp={handleSearch} className='m-auto bg-gray-100 grid grid-cols-12 my-3 rounded p-1 w-11/12 border border-gray-300 px-3 focus:outline-indigo-500' placeholder='Search Pokemon'/>
  )
}
