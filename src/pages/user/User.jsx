import { useState } from 'react'
import { useParams } from 'react-router-dom'

import UseFetchUserImages from '../../hooks/UseFetchUserImages'
import UseFetchUser from '../../hooks/UseFetchUser'

import HeaderInfo from './components/HeaderInfo'
import ConectionButtons from './components/ConectionButtons'
import Gallery from '../../components/Gallery'
import Loading from '../../components/Loading'
import NotFound from '../NotFound'

import './User.scss'

function User () {
  const [page, setPage] = useState(1)

  const { username } = useParams()
  const { user, loading, error } = UseFetchUser({ username })
  const {
    images,
    maxPage,
    error: error1,
    loading: loading1
  } = UseFetchUserImages({ username, page })

  if (loading || loading1) return <Loading />
  if (error || error1) return <NotFound />

  return (
    <div className='User'>
      <HeaderInfo user={user} />
      <ConectionButtons user={user} />
      {/* <Collection collection={collection} /> */}
      <Gallery
        images={images}
        page={page}
        setPage={setPage}
        maxPage={maxPage}
      />
    </div>
  )
}

export default User
