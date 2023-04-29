import { ChangeCircle, Delete, ZoomOutMap } from "@mui/icons-material";
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
      className="m-2 relative aspect-square"
      onMouseLeave={() => setShowOptions(false)}
    >
      <img
        src={item.image}
        alt="Product image"
        className="h-full"
        onMouseEnter={() => setShowOptions(true)}
        onBlur={() => setShowOptions(false)}
      />

      {showModal && <Modal image={item.image} hideModal={setShowModal} />}
      {showPreview && <Preview showPreview={setShowPreview} image={item} />}

      {showOptions && (
        <div className="absolute bottom-0 left-0 w-full">
          <div className="flex bg-gray-300 w-full p-3">
            <div className="flex-grow">
              <button onClick={() => setShowModal(true)}>
                <ZoomOutMap />
              </button>
            </div>
            <div className="flex-none">
              <button onClick={() => setShowPreview(true)}>
                <ChangeCircle />
              </button>
              <button>
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
