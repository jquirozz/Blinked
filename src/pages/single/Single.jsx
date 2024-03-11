import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import UseFetchById from '../../hooks/UseFetchById'
import UseDateFormat from '../../hooks/UseDateFormat'
import { abrNum } from '../../services/abrNum'

import ActionSection from './components/ActionSection'
import Loading from '../../components/Loading'
import NotFound from '../NotFound'

import './Single.scss'
import { FaUnsplash } from 'react-icons/fa6'
import { CiMenuKebab } from 'react-icons/ci'

function Single () {
  const { id } = useParams()
  const { item, error, loading } = UseFetchById({ id })
  const { date } = UseDateFormat({ item })

  useEffect(() => {
    console.log(item)
  }, [item])

  if (loading) return <Loading />
  if (error) return <NotFound />

  return (
    <div className='Single'>
      <header className='user'>
        <Link to={`/user/${item.user?.id}`} className='userMain'>
          <div className='pfp'>
            <img
              src={item.user?.profile_image?.small}
              alt={`user ${item.user?.username}`}
            />
          </div>
          <h2>{item.user?.username}</h2>
        </Link>
        <Link
          to={`https://unsplash.com/@${item.user?.username}`}
          target='_blank'
          rel='noopener noreferrer'
          className='toUnsplash'
        >
          <FaUnsplash />
        </Link>
      </header>
      <img
        className='image'
        src={item.urls.small}
        alt={item.alt_description}
        style={{ aspectRatio: item.width / item.height }}
      />
      <footer className='postInfo'>
        <ActionSection init_like={item.liked_by_user} />
        <section className='main'>
          <h3 className='likesCount'>
            {abrNum(item.likes, 1)} likes · {abrNum(item.views, 1)} views
          </h3>
          <p className='description'>
            {item.description || item.alt_description}
          </p>
          <h6 className='date'>Uploaded on {date}</h6>
        </section>
      </footer>
    </div>
  )
}

export default Single
