import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import './style/SearchBar.scss'
import { IoSearch } from 'react-icons/io5'

function SearchBar ({ topic, setTopic, setPage }) {
  const [input, setInput] = useState('')

  const location = useLocation()
  const navigate = useNavigate()

  // Reset topic
  useEffect(() => {
    if (location.pathname === '/') return setTopic('')
  }, [setTopic, location.pathname])

  const handleSubmit = e => {
    e.preventDefault()

    if (input.length > 2) {
      setTopic(input)
      setPage(1)
      navigate(`/search/${input}`)
      setInput('')
    }
  }

  return (
    <form onSubmit={e => handleSubmit(e)} className='SearchBar'>
      <input
        type='text'
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder={topic || 'Popular'}
      />
      <button type='submit'>
        <IoSearch />
      </button>
    </form>
  )
}

export default SearchBar
