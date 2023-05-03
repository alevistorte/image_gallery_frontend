import { Edit, Delete, Favorite, ZoomOutMap } from "@mui/icons-material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import Preview from "./Preview";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCollection } from "../actions/collectionActions";

function PhotoCard({ item = {} }) {
  const [showOptions, setShowOptions] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { collections } = useSelector((s) => s.collections);
  const [collectionsName, setCollectionsName] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    let cNames = {};
    collections.forEach(({ name }) => {
      return (cNames[name] = name);
    });
    setCollectionsName(cNames);
  }, []);

  const handleFavorite = async () => {
    const { value: collection } = await Swal.fire({
      input: "select",
      inputOptions: collectionsName,
      inputPlaceholder: "Select the collection",
      confirmButtonText: "Add",
      cancelButtonText: "Cancel",
      cancelButtonColor: "#333f",
      showCancelButton: true,
    });

    if (collection) {
      dispatch(addProductToCollection(collection, item.url));
    }
  };

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
              <button
                className={`hover:text-red-400 ${
                  item.is_favorite && "text-red-600"
                }`}
                onClick={handleFavorite}
              >
                <Favorite />
              </button>
              <button
                className="hover:text-blue-500"
                onClick={() => setShowPreview(true)}
              >
                <Edit />
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
