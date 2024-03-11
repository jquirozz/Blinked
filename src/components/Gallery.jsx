import { Link } from 'react-router-dom'

import Pagination from './Pagination'

import './style/Gallery.scss'

function Gallery ({ images, page, setPage, maxPage }) {
  return (
    <div className='Gallery'>
      <header>
        {images.map(image => (
          <Link to={`/id/${image.id}`} className='item' key={image.id}>
            <img src={image.urls?.thumb} alt={image.alt_description} />
          </Link>
        ))}
      </header>
      {maxPage > 1 && (
        <footer>
          <Pagination page={page} setPage={setPage} maxPage={maxPage} />
        </footer>
      )}
    </div>
  )
}

export default Gallery
