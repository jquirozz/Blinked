import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import UseFetchImages from '../../hooks/UseFetchImages'
import { fetchByQuery } from '../../services/fetchByQuery'

import Loading from '../../components/Loading'
import NotFound from '../NotFound'

import Gallery from '../../components/gallery/Gallery'
import Navigation from './components/Navigation'

import './Explore.scss'

function Explore () {
  const { search: param_search } = useParams()
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const { images, maxPage, error, loading, setItem, setImages } =
    UseFetchImages({
      query: search,
      page,
      order: 'popular',
      fetchBy: fetchByQuery
    })

  useEffect(() => {
    setSearch(param_search || search)

    // Reset image arrays
    setItem([])
    setImages([])
  }, [search, setItem, setImages, param_search])

  if (loading) return <Loading />
  if (error) return <NotFound />

  return (
    <div className='Explore'>
      <Navigation search={search} setSearch={setSearch} setPage={setPage} />
      <Gallery array={images} page={page} maxPage={maxPage} setPage={setPage} />
    </div>
  )
}

export default Explore
