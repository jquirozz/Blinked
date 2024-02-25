import { useState } from 'react'

import UseFetchImages from '../../hooks/UseFetchImages'
import { fetchByQuery } from '../../services/fetchByQuery'

import Loading from '../../components/Loading'
import NotFound from '../NotFound'

import Gallery from '../../components/gallery/Gallery'
import './Recent.scss'

function Recent () {
  const { images, error, loading } = UseFetchImages({
    order: 'latest',
    fetchBy: fetchByQuery
  })

  if (loading) return <Loading />
  if (error) return <NotFound />

  return (
    <div className='Recent'>
      <Gallery array={images} />
    </div>
  )
}

export default Recent
