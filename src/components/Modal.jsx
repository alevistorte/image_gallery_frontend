import { Close } from "@mui/icons-material";
import PropTypes from "prop-types";

function Modal({ image = "", hideModal: showModal = () => {} }) {
  const handleClose = () => {
    showModal(false);
  };
  return (
    <div
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10  bg-white h-5/6 aspect-square"
      onBlur={handleClose}
    >
      <div className="flex justify-end h-fit">
        <button
          className="m-2 px-2 py-1 bg-red-500 rounded-full text-white"
          onClick={handleClose}
        >
          <Close />
          {/* <span className="text-xs text-white"></span> */}
        </button>
      </div>
      <div className="flex justify-center items-center">
        <img src={image} alt="image" />
      </div>
    </div>
  );
}

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  hideModal: PropTypes.func.isRequired,
};

export default Modal;
