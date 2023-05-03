import {
  ChangeCircle,
  Delete,
  Favorite,
  ZoomOutMap,
} from "@mui/icons-material";
import PropTypes from "prop-types";
import { useState } from "react";
import Modal from "./Modal";
import Preview from "./Preview";

function PhotoCard({ item = {} }) {
  const [showOptions, setShowOptions] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className="m-2 relative aspect-square shadow-md hover:shadow-xl"
      onMouseLeave={() => setShowOptions(false)}
    >
      <div className="flex justify-center">
        <img
          src={item.image}
          alt="Product image"
          onMouseEnter={() => setShowOptions(true)}
          onBlur={() => setShowOptions(false)}
        />
      </div>
      {showModal && <Modal image={item.image} hideModal={setShowModal} />}
      {showPreview && <Preview showPreview={setShowPreview} image={item} />}

      {showOptions && (
        <div className="absolute bottom-0 left-0 w-full">
          <div className="flex bg-gray-300 w-full p-3">
            <div className="flex-grow">
              <button
                className="hover:scale-110"
                onClick={() => setShowModal(true)}
              >
                <ZoomOutMap />
              </button>
            </div>
            <div className="flex-none">
              <button className="hover:text-red-600">
                <Favorite />
              </button>
              <button
                className="hover:text-blue-500"
                onClick={() => setShowPreview(true)}
              >
                <ChangeCircle />
              </button>
              <button className="hover:scale-110">
                <Delete />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

PhotoCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default PhotoCard;
