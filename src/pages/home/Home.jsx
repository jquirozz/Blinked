import { useEffect } from 'react'

import useFetchByQuery from '../../hooks/UseFetchByQuery'

import Loading from '../../components/Loading'
import NotFound from '../NotFound'

import './Home.scss'
import Gallery from '../../components/Gallery'

function Home ({ topic, page }) {
  const { images, maxPage, error, loading } = useFetchByQuery({
    query: topic,
    page
  })

  useEffect(() => {
    console.log(images, maxPage, error, loading)
  }, [images, maxPage, error, loading])

  if (loading) return <Loading />
  if (error) return <NotFound />

  return (
    <div className='Home'>
      <Gallery images={images} />
    </div>
  )
}

export default Home
