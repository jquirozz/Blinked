import { useState } from 'react'

import UseFetchImages from '../../hooks/UseFetchImages'
import { fetchByQuery } from '../../services/fetchByQuery'

import Loading from '../../components/Loading'
import NotFound from '../NotFound'

import Gallery from '../../components/gallery/Gallery'
import './Home.scss'

function Home () {
  const [page, setPage] = useState(1)
  const { images, maxPage, error, loading } = UseFetchImages({
    order: 'latest',
    page,
    fetchBy: fetchByQuery
  })

  if (loading) return <Loading />
  if (error) return <NotFound />

  return (
    <div className='Home'>
      <Gallery array={images} page={page} maxPage={maxPage} setPage={setPage} />
    </div>
  )
}

export default Home
