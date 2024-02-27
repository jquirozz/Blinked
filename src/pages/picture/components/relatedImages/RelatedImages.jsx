import UseFetchImages from '../../../../hooks/UseFetchImages'
import { fetchByQuery } from '../../../../services/fetchByQuery'

import Gallery from '../../../../components/gallery/Gallery'

import Loading from '../../../../components/Loading'
import NotFound from '../../../NotFound'

import './RelatedImages.scss'

function RelatedImages ({ topic }) {
  const { images, error, loading } = UseFetchImages({
    query: topic,
    order: 'popular',
    fetchBy: fetchByQuery
  })

  if (loading) return <Loading />
  if (error) return <NotFound />

  return (
    <div className='RelatedImages'>
      <Gallery array={images} />
    </div>
  )
}

export default RelatedImages
