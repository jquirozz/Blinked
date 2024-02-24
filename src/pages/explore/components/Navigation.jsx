import { useRef } from 'react'
import { useDraggable } from 'react-use-draggable-scroll'

import './Navigation.scss'
import { BsSearch } from 'react-icons/bs'

const TAGS = [
  'Wallpapers',
  'Nature',
  'Travel',
  'Love',
  'Gaming',
  'Film',
  'Event',
  'Animals',
  'People',
  'Sports'
]

function Navigation () {
  const tagsRef = useRef()
  const { events } = useDraggable(tagsRef)

  return (
    <div className='Navigation'>
      <form
      // onSubmit={}
      >
        <input type='text' />
        <button type='submit'>
          <BsSearch />
        </button>
      </form>
      <aside ref={tagsRef} {...events}>
        {TAGS.map((tag, key) => (
          <button key={key}>{tag}</button>
        ))}
      </aside>
    </div>
  )
}

export default Navigation
