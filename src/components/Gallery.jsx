import PropTypes from "prop-types";
import PhotoCard from "./PhotoCard";

function Gallery({ items = [] }) {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.image}>
          <PhotoCard item={item} />
        </div>
      ))}
    </div>
  );
}

Gallery.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Gallery;
