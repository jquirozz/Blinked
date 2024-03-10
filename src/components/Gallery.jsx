import { Link } from 'react-router-dom'
import './style/Gallery.scss'

function Gallery ({ images }) {
  return (
    <div className='Gallery'>
      <header>
        {images.map(image => (
          <Link to={`/id/${image.id}`} className='item' key={image.id}>
            <img src={image.urls?.thumb} alt={image.alt_description} />
          </Link>
        ))}
      </header>
      <footer>Pagination</footer>
    </div>
  )
}

export default Gallery
