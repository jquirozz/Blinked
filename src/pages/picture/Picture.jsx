import { useState } from 'react'
import { useParams } from 'react-router-dom'

import UseFetchImages from '../../hooks/UseFetchImages'
import { fetchById } from '../../services/fetchById'

import Loading from '../../components/Loading'
import NotFound from '../NotFound'

import MainCard from './components/MainCard'

import './Picture.scss'

function Picture () {
  const { id } = useParams()
  const [menu, setMenu] = useState()
  const { item, error, loading } = UseFetchImages({
    id,
    fetchBy: fetchById
  })

  if (loading) return <Loading />
  if (error) return <NotFound />

  return (
    <div className='Picture'>
      <MainCard item={item} menu={menu} setMenu={setMenu} />
    </div>
  )
}

export default Picture
