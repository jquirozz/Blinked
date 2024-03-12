import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import { copyUrl } from '../../../services/copyUrl'

import './ActionSection.scss'
import { FaRegHeart, FaHeart, FaLink } from 'react-icons/fa6'
import { IoMdDownload } from 'react-icons/io'

function ActionSection ({ init_like }) {
  const [liked, setLiked] = useState(init_like)
  const location = useLocation()

  const handleLike = () => setLiked(!liked)
  const handleLink = () => copyUrl(location)

  const handleDownload = () => {}

  return (
    <section className='ActionSection'>
      <button className={`likes ${liked && 'liked'}`} onClick={handleLike}>
        {liked ? <FaHeart /> : <FaRegHeart />}
      </button>
      <button className='copyLink' onClick={handleLink}>
        <FaLink />
      </button>
      <button className='download' onClick={handleDownload}>
        <IoMdDownload />
      </button>
    </section>
  )
}

export default ActionSection
