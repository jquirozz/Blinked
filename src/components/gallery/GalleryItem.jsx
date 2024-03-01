import { Link } from 'react-router-dom'
import { FaUnsplash } from 'react-icons/fa'

import Like from '../buttons/Like'

import './GalleryItem.scss'

function GalleryItem ({ item }) {
  const { id, alt_description, links, width, height } = item
  const { small_s3 } = item.urls
  const { liked_by_user, likes } = item
  const { profile_image, username } = item.user

  return (
    <div className='GalleryItem'>
      <img
        className='picture'
        src={small_s3}
        alt={alt_description}
        style={{ aspectRatio: width / height, width: '100%' }}
      />
      <Link className='goPicture' to={`/pic/${id}`} />

      <Link className='toUnsplash' to={links.html}>
        <FaUnsplash />
      </Link>
      <footer>
        <Link className='user' to={`/user/${username}`}>
          <img src={profile_image.small} alt={`${username} profile picture`} />
          <h3>@{username || 'username'}</h3>
        </Link>
        <Like init={liked_by_user} count={likes} />
      </footer>
    </div>
  )
}

export default GalleryItem
