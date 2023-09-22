import { useRef } from 'react'
import { Search } from 'react-bootstrap-icons'
import { useNavigate } from 'react-router-dom'


function SearchBox({id}) {
  const searchString = useRef()
const navigate = useNavigate()
  const handleSearch = (e)=>{
      e.preventDefault()
      if(searchString.current.value === '') return
      navigate(`/goods?search=true&string=${searchString.current.value}#filter`)
  }
  return (
    <form id={id || ''} className="search-0001-ds flex-centered-row-x" onSubmit={(e)=>handleSearch(e)}>
          <input ref={searchString} type="text" placeholder='Search..........' />
          <button type="submit" className='background-accent-solid'><Search size={25} className='search-0001'/></button>
        </form>
  )
}

export default SearchBox
