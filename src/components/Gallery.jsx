import PropTypes from "prop-types";
import PhotoCard from "./PhotoCard";
import { useNavigation } from "react-router-dom";
import Loading from "./Loading";

function Gallery({ items = [] }) {
  const navigation = useNavigation();
  return (
    <div className="flex justify-center items-center">
      {navigation.state === "loading" ? (
        <Loading />
      ) : (
        <div className="grid md:grid-cols-5 sm:grid-cols-4">
          {items
            .filter((item) => item.image !== "")
            .map((item) => (
              <div key={item.image}>
                <PhotoCard item={item} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

Gallery.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Gallery;
