import { useState } from 'react'

import UseFetchImages from '../../hooks/UseFetchImages'
import { fetchByQuery } from '../../services/fetchByQuery'

import Loading from '../../components/Loading'
import NotFound from '../NotFound'

import Gallery from '../../components/Gallery'
import './Recent.scss'

function Recent () {
  const [recent, setRecent] = useState([])
  const { error, loading } = UseFetchImages({
    order: 'latest',
    setArray: setRecent,
    fetchBy: fetchByQuery
  })

  if (loading) return <Loading />
  if (error) return <NotFound />

  return (
    <div className='Recent'>
      <Gallery array={recent} />
    </div>
  )
}

export default Recent
