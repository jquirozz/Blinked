import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import UseFetchImages from '../../hooks/UseFetchImages'
import { fetchById } from '../../services/fetchById'

import Loading from '../../components/Loading'
import NotFound from '../NotFound'

import MainCard from './components/mainCard/MainCard'
import Gallery from '../../components/gallery/Gallery'

import './Picture.scss'

function Picture () {
  const { id } = useParams()
  const [topic, setTopic] = useState('')

  // Item image
  const { item, error, loading } = UseFetchImages({
    id,
    fetchBy: fetchById
  })

  // Related images
  const {
    images,
    error: related_error,
    loading: related_loading
  } = UseFetchImages({
    query: topic
  })

  useEffect(() => {
    const { tags } = item
    if (tags && tags.length > 0) {
      const first = tags[0]
      setTopic(first.title)
    }
  }, [item])

  if (loading) return <Loading />
  if (error || related_error) return <NotFound />

  return (
    <div className='Picture'>
      <header className='MainCardWrap'>
        <MainCard item={item} setTopic={setTopic} />
      </header>
      {!related_loading && images && <Gallery array={images} />}
    </div>
  )
}

export default Picture
