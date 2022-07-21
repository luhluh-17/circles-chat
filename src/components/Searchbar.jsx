import React, { useState } from 'react'

function Searchbar() {
  const [search, setSearch] = useState('')

  const handleSearch = e => setSearch(e.target.value)
  return (
    <input
      className='navbar-search'
      type='text'
      autoComplete='on'
      placeholder='Search'
      value={search}
      onChange={handleSearch}
    />
  )
}

export default Searchbar
