import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDraggable } from 'react-use-draggable-scroll'

import './Navigation.scss'
import { BsSearch } from 'react-icons/bs'

const TAGS = [
  '3D Renders',
  'Animals',
  'Event',
  'Film',
  'Food & Drink',
  'Gaming',
  'Love',
  'Nature',
  'People',
  'Sports',
  'Travel',
  'Wallpapers'
]

function Navigation ({ search, setSearch, setPage }) {
  const [input, setInput] = useState('')

  const tagsRef = useRef()
  const { events } = useDraggable(tagsRef)

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()

    if (input.length > 2) {
      setSearch(input)
      redirectTo(input)
      setInput('')
    }
  }

  const handleTagClick = tag => {
    setSearch(tag)
    redirectTo(tag)
  }

  const redirectTo = path => {
    setPage(1)
    navigate(`/explore/${path}`)
  }

  return (
    <div className='Navigation'>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type='text'
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder={search || 'Popular'}
        />
        <button type='submit'>
          <BsSearch />
        </button>
      </form>
      <aside ref={tagsRef} {...events}>
        {TAGS.map((tag, key) => (
          <button key={key} onClick={() => handleTagClick(tag)}>
            {tag}
          </button>
        ))}
      </aside>
    </div>
  )
}

export default Navigation
