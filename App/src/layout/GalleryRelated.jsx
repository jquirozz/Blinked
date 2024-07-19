import Gallery from "./../components/Gallery";
import Related from "./../components/Related";
import "./GalleryRelated.scss";

function GalleryRelated() {
  return (
    <div className="GalleryRelated">
      <Gallery />
      <Related />
    </div>
  );
}

export default GalleryRelated;
