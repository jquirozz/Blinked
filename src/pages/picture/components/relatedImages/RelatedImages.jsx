import UseFetchImages from '../../../../hooks/UseFetchImages'
import { fetchByQuery } from '../../../../services/fetchByQuery'

import Gallery from '../../../../components/gallery/Gallery'

import NotFound from '../../../../pages/NotFound'

import './RelatedImages.scss'

function RelatedImages ({ topic }) {
  const { images, error, loading } = UseFetchImages({
    query: topic,
    order: 'popular',
    fetchBy: fetchByQuery
  })

  if (error) return <NotFound />

  return (
    <div className='RelatedImages'>
      <Gallery array={images} />
    </div>
  )
}

export default RelatedImages
