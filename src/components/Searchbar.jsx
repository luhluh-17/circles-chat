import React, { useEffect, useState } from 'react'

function Searchbar({ onFilter }) {
  const [search, setSearch] = useState('')

  const handleSearch = e => setSearch(e.target.value)

  useEffect(() => {
    onFilter(search)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

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
