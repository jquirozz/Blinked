import { Link } from 'react-router-dom'

import './style/TopInfo.scss'
import { CiMenuKebab } from 'react-icons/ci'

function TopInfo ({ item, menu, setMenu }) {
  // general
  const { description, alt_description } = item
  // user
  const { profile_image, username } = item.user

  const handleMenu = () => {
    setMenu(!menu)
  }

  return (
    <header className='TopInfo'>
      <Link className='user' to={`/user/${username}`}>
        <img src={profile_image.small} alt={`${username} profile picture`} />
        <h2>{username}</h2>
      </Link>
      <button className='openMenu' onClick={handleMenu}>
        <CiMenuKebab />
      </button>
    </header>
  )
}

export default TopInfo
