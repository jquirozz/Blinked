import { NavLink } from 'react-router-dom'

import DragLine from '../../../components/DragLine'

import './PopularTags.scss'

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

function PopularTags () {
  return (
    <div className='PopularTags'>
      <DragLine>
        {TAGS.map((tag, key) => (
          <NavLink to={`/search/${tag}`} key={key}>
            {tag}
          </NavLink>
        ))}
      </DragLine>
    </div>
  )
}

export default PopularTags
