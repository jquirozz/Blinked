import { useState } from 'react'
import { Link } from 'react-router-dom'

import './ConectionButtons.scss'
import { FaInstagram, FaXTwitter, FaRegFolder } from 'react-icons/fa6'

function ConectionButtons ({ user }) {
  const [following, setFollowing] = useState(user.followed_by_user)

  const handleFollow = () => setFollowing(!following)

  return (
    <section className='ConectionButtons'>
      <button
        onClick={handleFollow}
        className={`followButton ${following ? 'followed' : 'unfollowed'}`}
      >
        <h4>{following ? 'Unfollow' : 'Follow'}</h4>
      </button>
      {user.instagram_username && (
        <Link
          to={`https://www.instagram.com/${user.instagram_username}`}
          target='_blank'
          rel='noopener noreferrer'
          className='instagram'
        >
          <FaInstagram />
          <h4>Instagram</h4>
        </Link>
      )}
      {user.twitter_username && (
        <Link
          to={`https://twitter.com/${user.twitter_username}`}
          target='_blank'
          rel='noopener noreferrer'
          className='twitter'
        >
          <FaXTwitter />
          <h4>Twitter</h4>
        </Link>
      )}
      {user.portfolio_url && (
        <Link
          to={user.portfolio_url}
          target='_blank'
          rel='noopener noreferrer'
          className='twitter'
        >
          <FaRegFolder />
          <h4>Portfolio</h4>
        </Link>
      )}
    </section>
  )
}

export default ConectionButtons
