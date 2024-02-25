import GalleryItem from './GalleryItem'
import './style/Gallery.scss'

function Gallery ({ array }) {
  return (
    <div className='Gallery'>
      {array.map((item, key) => (
        <GalleryItem item={item} key={key} />
      ))}
    </div>
  )
}

export default Gallery
