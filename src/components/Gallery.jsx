import PropTypes from "prop-types";

function Gallery({ items = [] }) {
  console.log(items);
  return (
    <div className="grid grid-cols-5">
      {items.map((item) => (
        <div key={item.image} className=" m-2 h-56 ">
          <img src={item.image} alt="Product image" className="h-full" />
        </div>
      ))}
    </div>
  );
}

Gallery.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Gallery;
