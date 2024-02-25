import { useEffect, useState } from 'react'

import UseFetchImages from '../../hooks/UseFetchImages'
import { fetchByQuery } from '../../services/fetchByQuery'

import Loading from '../../components/Loading'
import NotFound from '../NotFound'

import Gallery from '../../components/Gallery'
import Navigation from './components/Navigation'

import './Explore.scss'

function Explore () {
  const [search, setSearch] = useState('')
  const [popular, setPopular] = useState([])
  const { error, loading } = UseFetchImages({
    query: search,
    order: 'popular',
    setArray: setPopular,
    fetchBy: fetchByQuery
  })

  if (loading) return <Loading />
  if (error) return <NotFound />

  return (
    <div className='Explore'>
      <Navigation search={search} setSearch={setSearch} />
      <Gallery array={popular} />
    </div>
  )
}

export default Explore
