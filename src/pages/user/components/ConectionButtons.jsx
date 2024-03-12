import { useState } from 'react'
import { Link } from 'react-router-dom'

import './ConectionButtons.scss'
import { FaInstagram, FaXTwitter, FaRegFolder } from 'react-icons/fa6'

function ConectionButtons ({ user }) {
  const [following, setFollowing] = useState(user.followed_by_user)

  const handleFollow = () => setFollowing(!following)

  const LINKS = [
    {
      text: 'instagram',
      url: `https://www.instagram.com/${user.instagram_username}`,
      svg: <FaInstagram size={24} />,
      check: user.instagram_username
    },
    {
      text: 'twitter',
      url: `https://twitter.com/${user.twitter_username}`,
      svg: <FaXTwitter size={20} />,
      check: user.twitter_username
    },
    {
      text: 'portfolio',
      url: user.portfolio_url,
      svg: <FaRegFolder size={22} />,
      check: user.portfolio_url
    }
  ]

  return (
    <section className='ConectionButtons'>
      <button
        onClick={handleFollow}
        className={`followButton ${following ? 'followed' : 'unfollowed'}`}
      >
        <h4>{following ? 'Unfollow' : 'Follow'}</h4>
      </button>
      {LINKS.map(({ check, url, svg }) => (
        <>
          {check && (
            <Link
              to={url}
              target='_blank'
              rel='noopener noreferrer'
              className='twitter'
            >
              {svg}
            </Link>
          )}
        </>
      ))}
    </section>
  )
}

export default ConectionButtons
