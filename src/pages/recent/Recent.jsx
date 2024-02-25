import { useState } from 'react'
import UseFetchQuery from '../../hooks/UseFetchQuery'

import Loading from '../../components/Loading'
import NotFound from '../NotFound'

import Gallery from '../../components/Gallery'
import LoadMore from '../../components/buttons/LoadMore'
import './Recent.scss'

function Recent () {
  const [recent, setRecent] = useState([])
  const { error, loading } = UseFetchQuery({ setArray: setRecent })

  if (loading) return <Loading />
  if (error) return <NotFound />

  return (
    <div className='Recent'>
      <Gallery array={recent} />
      <LoadMore />
    </div>
  )
}

export default Recent
