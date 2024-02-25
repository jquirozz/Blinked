import { useState } from 'react'

import './Like.scss'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

function Like ({ init }) {
  const [liked, setLiked] = useState(init)

  const handleLike = () => {
    setLiked(!liked)
  }

  return (
    <button className='Like' onClick={handleLike}>
      {liked ? <FaHeart fill='#f4346d' /> : <FaRegHeart />}
    </button>
  )
}

export default Like
