import { useEffect, useState } from 'react'

import UseFetchImages from '../../hooks/UseFetchImages'
import { fetchByQuery } from '../../services/fetchByQuery'

import Loading from '../../components/Loading'
import NotFound from '../NotFound'

import Gallery from '../../components/gallery/Gallery'
import Navigation from './components/Navigation'

import './Explore.scss'

function Explore () {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const { images, maxPage, error, loading } = UseFetchImages({
    query: search,
    page,
    order: 'popular',
    fetchBy: fetchByQuery
  })

  if (loading) return <Loading />
  if (error) return <NotFound />

  return (
    <div className='Explore'>
      <Navigation search={search} setSearch={setSearch} />
      <Gallery array={images} page={page} maxPage={maxPage} setPage={setPage} />
    </div>
  )
}

export default Explore
