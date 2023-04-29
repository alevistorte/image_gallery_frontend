import { Close } from "@mui/icons-material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { getNewImages } from "../helpers/requests";

function Preview({ showPreview = () => {}, image = {} }) {
  const [loading, setLoading] = useState(true);
  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    getNewImages(image.url)
      .then(async (r) => {
        if (r.ok) {
          const info = await r.json();
          setProductInfo(info);
          setLoading(false);
        } else {
          document.getElementById("textPreviewInfo").innerText = r.statusText;
        }
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10  bg-white h-5/6 aspect-square border-2 rounded-xl">
      <div className="flex justify-end h-fit">
        <button
          className="m-2 px-2 py-1 bg-red-500 rounded-full text-white"
          onClick={() => showPreview(false)}
        >
          <Close />
        </button>
      </div>
      <div className="flex flex-col justify-center items-center h-full">
        {loading ? (
          <>
            <div className="carousel h-1/2 aspect-square">
              <img src={image.image} alt="Image" />
            </div>
            <Loading />
          </>
        ) : (
          // <div info={productInfo}>Info loaded</div>
          <div>Info loaded</div>
        )}
      </div>
    </div>
  );
}

Preview.propTypes = {
  showPreview: PropTypes.func.isRequired,
  image: PropTypes.object.isRequired,
};

export default Preview;
