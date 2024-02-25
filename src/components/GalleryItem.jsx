import { Link } from 'react-router-dom'

import Like from '../components/buttons/Like'

import './style/GalleryItem.scss'
import { FaUnsplash } from 'react-icons/fa'

function GalleryItem ({ item }) {
  // general
  const { alt_description, links } = item
  // image
  const { full, raw, regular, small, small_s3, thumb } = item.urls
  // likes
  const { liked_by_user, likes } = item
  // user
  const { profile_image, username } = item.user

  return (
    <div className='GalleryItem'>
      <img className='picture' src={small_s3} alt={alt_description} />
      <Link to={links.html}>
        <FaUnsplash />
      </Link>
      <footer>
        <section className='user'>
          <img src={profile_image.small} alt={`${username} profile picture`} />
          <h3>@{username}</h3>
        </section>
        <Like init={liked_by_user} count={likes} />
      </footer>
    </div>
  )
}

export default GalleryItem
