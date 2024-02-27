import UseFetchImages from '../../../../hooks/UseFetchImages'
import { fetchByQuery } from '../../../../services/fetchByQuery'

import Gallery from '../../../../components/gallery/Gallery'

import Loading from '../../../../components/Loading'
import NotFound from '../../../../pages/NotFound'

import './RelatedImages.scss'

function RelatedImages ({ topic }) {
  const { images, error, loading } = UseFetchImages({
    query: topic,
    order: 'popular',
    fetchBy: fetchByQuery
  })

  if (error) return <NotFound />
  if (!loading) return <Loading />

  return (
    <div className='RelatedImages'>
      <Gallery array={images} />
    </div>
  )
}

export default RelatedImages
