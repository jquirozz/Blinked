import GalleryItem from './GalleryItem'
import Pagination from './Pagination.jsx'

import './Gallery.scss'

function Gallery ({ array, page, maxPage, setPage }) {
  return (
    <div className='Gallery'>
      <header>
        {array.map((item, key) => (
          <GalleryItem item={item} key={key} />
        ))}
      </header>
      {page && maxPage & setPage && (
        <Pagination page={page} maxPage={maxPage} setPage={setPage} />
      )}
    </div>
  )
}

export default Gallery
