import { useEffect } from 'react'
import { useParams } from 'react-router'

import useFetchByQuery from '../../hooks/UseFetchByQuery'

import Loading from '../../components/Loading'
import NotFound from '../NotFound'

import './Home.scss'
import Gallery from '../../components/Gallery'
import PopularTags from './components/PopularTags'

function Home ({ topic, setTopic, page, setPage }) {
  const { images, maxPage, error, loading } = useFetchByQuery({
    query: topic,
    page
  })
  const { query } = useParams()

  useEffect(() => {
    if (query) {
      setPage(1)
      setTopic(query)
    }
  }, [setTopic, query, setPage])

  useEffect(() => {
    console.log(images, maxPage, error, loading)
  }, [images, maxPage, error, loading])

  if (loading) return <Loading />
  if (error) return <NotFound />

  return (
    <div className='Home'>
      <PopularTags />
      <Gallery
        images={images}
        page={page}
        setPage={setPage}
        maxPage={maxPage}
      />
    </div>
  )
}

export default Home
