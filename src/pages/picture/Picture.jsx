import { useState } from 'react'
import { useParams } from 'react-router-dom'

import MainCard from './components/mainCard/MainCard'

import './Picture.scss'
import RelatedImages from './components/relatedImages/RelatedImages'

function Picture () {
  const { id } = useParams()
  const [topic, setTopic] = useState('')

  return (
    <div className='Picture'>
      <MainCard id={id} setTopic={setTopic} />
      <RelatedImages topic={topic} />
    </div>
  )
}

export default Picture
