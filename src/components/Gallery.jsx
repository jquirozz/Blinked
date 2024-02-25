import GalleryItem from './GalleryItem'
import LoadMore from './buttons/LoadMore'

import './style/Gallery.scss'

function Gallery ({ array }) {
  return (
    <div className='Gallery'>
      <header>
        {array.map((item, key) => (
          <GalleryItem item={item} key={key} />
        ))}
      </header>
      <LoadMore />
    </div>
  )
}

export default Gallery
