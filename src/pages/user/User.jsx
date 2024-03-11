import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import UseFetchUserImages from '../../hooks/UseFetchUserImages'
import UseFetchUser from '../../hooks/UseFetchUser'
import { abrNum } from '../../services/abrNum'

import Gallery from '../../components/Gallery'
import Loading from '../../components/Loading'
import NotFound from '../NotFound'

import './User.scss'
import { FaInstagram, FaXTwitter } from 'react-icons/fa6'

function User () {
  const [page, setPage] = useState(1)

  const { username } = useParams()
  const { user, loading, error } = UseFetchUser({ username })
  const {
    images,
    maxPage,
    error: error1,
    loading: loading1
  } = UseFetchUserImages({ username, page })

  const [following, setFollowing] = useState(user.followed_by_user)

  if (loading || loading1) return <Loading />
  if (error || error1) return <NotFound />

  const handleFollow = () => setFollowing(!following)

  const MAIN_INFO = [
    {
      text: 'Posts',
      value: abrNum(user.total_photos, 1)
    },
    {
      text: 'Followers',
      value: abrNum(user.followers_count, 1)
    },
    {
      text: 'Following',
      value: abrNum(user.following_count, 1)
    }
  ]

  return (
    <div className='User'>
      <header className='main'>
        <img src={user.profile_image?.medium} alt={`${user.name} profile`} />
        <div className='stats'>
          {MAIN_INFO.map(({ text, value }, key) => (
            <section key={key}>
              <h3>{value}</h3>
              <h4>{text}</h4>
            </section>
          ))}
        </div>
      </header>
      <section className='info'>
        <h2>{user.name}</h2>
        {user.bio && <p>{user.bio}</p>}
      </section>
      <section className='actionButtons'>
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
      </section>
      <Gallery
        images={images}
        page={page}
        setPage={setPage}
        maxPage={maxPage}
      />
    </div>
  )
}

export default User
