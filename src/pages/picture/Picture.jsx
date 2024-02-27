import { useEffect, useState } from 'react'

import UseFetchImages from '../../hooks/UseFetchImages'
import { fetchById } from '../../services/fetchById'

import Loading from '../../components/Loading'
import NotFound from '../NotFound'
import { useParams } from 'react-router-dom'

import MainCard from './components/mainCard/MainCard'

import './Picture.scss'
import RelatedImages from './components/relatedImages/RelatedImages'

function Picture () {
  const { id } = useParams()
  const [topic, setTopic] = useState('')
  const { item, error, loading } = UseFetchImages({
    id,
    fetchBy: fetchById
  })

  if (loading) return <Loading />
  if (error) return <NotFound />

  return (
    <div className='Picture'>
      <header className='MainCardWrap'>
        <MainCard item={item} setTopic={setTopic} />
      </header>
      <RelatedImages topic={topic} />
    </div>
  )
}

export default Picture
