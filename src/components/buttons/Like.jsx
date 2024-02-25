import { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

function Like ({ init }) {
  const [liked, setLiked] = useState(init)

  const handleLike = () => {
    setLiked(!liked)
  }

  return (
    <section className='Like' onClick={handleLike}>
      {liked ? <FaHeart fill='#f4346d' /> : <FaRegHeart />}
    </section>
  )
}

export default Like
